exports.authorizeRole = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.role)) {
        return res.status(403).send('Forbidden: Insufficient permissions');
      }
      next();
    };
  };
  