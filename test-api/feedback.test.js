const request = require('supertest');
const app = 'http://127.0.0.1:9090';

describe('Feedback Page Performance Test', () => {
  it('should handle 1000 POST requests within 10 minutes and measure average response time', async () => {
    jest.setTimeout(11 * 60 * 1000);

    const totalRequests = 1000;
    const totalTime = 10 * 60 * 1000;
    const interval = totalTime / totalRequests;
    const responseTimes = [];

    const testPayload = {
      name: 'Jean',
      email: 'jean.louis@email.com',
      message: 'Bonjour, ceci est un test.',
    };

    for (let i = 0; i < totalRequests; i++) {
      await new Promise(resolve => setTimeout(resolve, interval));
      const startTime = Date.now();
      const response = await request(app)
        .post('/feedback')
        .send(testPayload)
        .set('Accept', 'application/json');
      const endTime = Date.now();
      responseTimes.push(endTime - startTime);
    }

    const averageResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    console.log(`Average response time: ${averageResponseTime} ms`);
    expect(averageResponseTime).toBeLessThan(1000);
  }, 11 * 60 * 1000);
});