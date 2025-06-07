const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Welcome to the Sample API!');
  });

  test('GET /api/status should return health status', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.timestamp).toBeDefined();
  });
});