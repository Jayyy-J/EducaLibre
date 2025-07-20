const request = require('supertest');
const app = require('../server');

describe('API de EducaLibre', () => {
  it('debería responder con un mensaje de bienvenida en la ruta raíz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡El backend de EducaLibre está funcionando!');
  });
});
