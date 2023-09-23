const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const accessToken = jwt.sign({ userId: user._id, role: user.role }, 'ACCESS_SECRET_KEY', { expiresIn: '1h' });
const refreshToken = jwt.sign({ userId: user._id, role: user.role }, 'REFRESH_SECRET_KEY', { expiresIn: '7d' });

// Almacenar refreshToken en la base de datos
user.refreshToken = refreshToken;
await user.save();


exports.registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already registered');
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const user = new User({
      email,
      password: hashedPassword,
      role
    });

    // Guardar el usuario en la base de datos
    await user.save();

    // Generar un token JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, 'SECRET_KEY', { expiresIn: '1h' });

// Enviar accessToken y refreshToken al cliente
res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 3600000 });
res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 604800000 }); // 7 días en milisegundos


    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Puedes agregar aquí otros controladores relacionados con la autenticación
