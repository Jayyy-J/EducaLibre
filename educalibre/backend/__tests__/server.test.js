const request = require('supertest');
const app = require('../server');

describe('API de EducaLibre', () => {
  // Prueba para la ruta raíz
  it('debería responder con un mensaje de bienvenida en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡El backend de EducaLibre está funcionando!');
  });

  // Pruebas para el endpoint de registro de usuarios
  describe('POST /api/users/register', () => {
    it('debería registrar un nuevo usuario con datos válidos', async () => {
      const newUser = {
        name: 'Juan Perez',
        email: 'juan.perez@example.com',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/users/register')
        .send(newUser);

      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Usuario registrado con éxito.');
      expect(response.body.user.name).toBe(newUser.name);
      expect(response.body.user.email).toBe(newUser.email);
      expect(response.body.user.password).toBeUndefined(); // Asegurarse de no devolver la contraseña
    });

    it('debería devolver un error 400 si faltan datos', async () => {
      const incompleteUser = {
        name: 'Ana',
        email: 'ana@example.com'
        // Falta la contraseña
      };

      const response = await request(app)
        .post('/api/users/register')
        .send(incompleteUser);

      expect(response.statusCode).toBe(400);
      expect(response.body.message).toBe('Todos los campos son obligatorios.');
    });
  });
});
