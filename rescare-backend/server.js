const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const userRoutes = require('./routes/userRoutes');
const providerRoutes = require('./routes/providerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const messageRoutes = require('./routes/messageRoutes');
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/rescare";
const db = client.db('rescare');
const mongoose = require('mongoose');
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.send('Hello, Rescare Marketplace!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);
  // Aquí irá la lógica de manejo de mensajes en tiempo real
});

http.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

MongoClient.connect(uri, (err, client) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
  

  // Aquí irá el código para manejar las rutas y operaciones de la base de datos

  client.close();
});


mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Montar las rutas de autenticación
app.use('/auth', authRoutes);
// Resto del código del archivo server.js
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/reviews', reviewRoutes);








