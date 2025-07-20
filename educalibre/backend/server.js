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

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡El backend de EducaLibre está funcionando!');
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app; // para las pruebas
