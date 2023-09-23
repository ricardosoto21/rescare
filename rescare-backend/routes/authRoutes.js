const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para registrar usuarios
router.post('/register', authController.registerUser);

// Puedes agregar aquí otras rutas relacionadas con la autenticación

module.exports = router;
const { verifyToken, authorizeRole } = require('../middlewares/authMiddleware');


router.post('/refresh-token', async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      const decoded = jwt.verify(refreshToken, 'REFRESH_SECRET_KEY');
      
      const user = await User.findById(decoded.userId);
      if (!user || user.refreshToken !== refreshToken) {
        return res.status(401).send('Invalid refresh token');
      }
  
      const newAccessToken = jwt.sign({ userId: user._id, role: user.role }, 'ACCESS_SECRET_KEY', { expiresIn: '1h' });
      res.cookie('accessToken', newAccessToken, { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 3600000 });
      res.send('Access token refreshed');
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
