// Importar dependencias
const express = require('express');
const admin = require('firebase-admin');

// Cargar configuración de Firebase
// NOTA: Debes crear este archivo con tus propias credenciales de Firebase
// const serviceAccount = require('./firebase/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://<TU-PROYECTO>.firebaseio.com"
// });

// Inicializar la aplicación de Express
const app = express();

// Middlewares
app.use(express.json());

// Rutas de API
const usersRouter = express.Router();

usersRouter.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // --- Validación de Entrada ---
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  // --- Lógica de Registro (Simulada) ---
  // Aquí iría la lógica para crear el usuario en Firebase Auth
  // y guardar los datos adicionales en la Realtime Database.

  console.log(`Usuario recibido para registro: ${name} (${email})`);

  // Devolvemos una respuesta de éxito simulada
  res.status(201).json({
    message: 'Usuario registrado con éxito.',
    user: { name, email } // No devolver la contraseña
  });
});

app.use('/api/users', usersRouter);


// Ruta principal
app.get('/', (req, res) => {
  res.send('¡El backend de EducaLibre está funcionando!');
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app; // para las pruebas
