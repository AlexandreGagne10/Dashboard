const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('returns welcome JSON', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Bienvenue sur l'API Dashboard" });
  });
});
