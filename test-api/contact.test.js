const request = require('supertest');
const app = require('../app'); // Importez votre serveur Express ou app.js

describe('Performance Test for /contact', () => {
  const testPayload = {
    firstName: 'Jean',
    lastName: 'Louis',
    mobilePhone: '0610203040',
    email: 'jean.louis@email.com',
    arrivedAt: '2025-01-01',
    departureAt: '2025-01-10',
    message: 'Bonjour, ceci est un test.',
  };

  const simulateLoad = async (numRequests) => {
    const promises = [];
    for (let i = 0; i < numRequests; i++) {
      promises.push(request(app).post('/contact').send(testPayload));
    }
    return Promise.all(promises);
  };

  it('should handle 1000 requests under 10 seconds', async () => {
    const startTime = Date.now();
    const responseTimes = [];

    // Envoi de 1000 requêtes simultanées
    const results = await simulateLoad(1000);

    results.forEach((response, index) => {
      // Vérifie que toutes les requêtes répondent avec succès
      expect(response.status).toBe(200);
      responseTimes.push(Date.now() - startTime);
    });

    const endTime = Date.now();
    const duration = endTime - startTime;

    // Affiche les métriques
    console.log(`Completed 1000 requests in ${duration}ms`);
    console.log(`Average response time: ${(
      responseTimes.reduce((acc, time) => acc + time, 0) / responseTimes.length
    ).toFixed(2)}ms`);

    // Vérifie que toutes les requêtes ont été traitées sous 10 secondes
    expect(duration).toBeLessThan(10 * 1000);
  });
});
