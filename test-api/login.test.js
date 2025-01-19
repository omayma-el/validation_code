import request from 'supertest';
import jwt from 'jsonwebtoken';

const secret = 'SANDRA_SECRET';
const payload = {
  login: {
    id: '6437d29f8218621e06204fff',
    name: 'Soizic'
  }
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log('Generated Token:', token);

const baseUrl = 'http://127.0.0.1:3000';

describe(`${baseUrl}/login`, () => {
  describe('GET /login/?name=??&&password=??', () => {
    it('Should get a token authentification', async () => {
      const name = 'Soizic';
      const password = 'Vernet';
      const res = await request(baseUrl)
        .get('/login/')
        .query({ name, password });

      const { token } = res.body;
      jwt.verify(token, 'SANDRA_SECRET', (err, user) => {
        expect(user.login.id).toBe('6437d29f8218621e06204fff');
      });

      expect(res.statusCode).toBe(200);
    });
  });
});
