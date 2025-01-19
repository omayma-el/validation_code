import request from 'supertest';
import async from 'async';

const baseUrl = 'http://127.0.0.1:3000';
const NUM_USERS = 1000;
const TEST_DURATION = 10 * 60 * 1000;
let totalRequests = 0;
let totalResponseTime = 0;

function performRequest(callback) {
  const startTime = Date.now();
  request(baseUrl)
    .get('/')
    .end((err, res) => {
      if (err) {
        console.error('Request Error:', err);
        return callback(err);
      }
      const responseTime = Date.now() - startTime;
      totalRequests++;
      totalResponseTime += responseTime;
      console.log(`Request completed. Response Time: ${responseTime} ms, Total Requests: ${totalRequests}`);
      callback(null, responseTime);
    });
}

function runLoadTest(done) {
  const startTime = Date.now();
  const endTime = startTime + TEST_DURATION;

  let requestsInCurrentSecond = 0;
  const logInterval = 1000;

  const logProgress = setInterval(() => {
    console.log(`Time elapsed: ${Math.floor((Date.now() - startTime) / 1000)} seconds`);
    console.log(`Total Requests: ${totalRequests}, Current Requests/Sec: ${requestsInCurrentSecond}`);
    console.log(`Average Response Time: ${(totalResponseTime / totalRequests || 0).toFixed(2)} ms`);
    requestsInCurrentSecond = 0;
  }, logInterval);

  async.whilst(
    () => Date.now() < endTime,
    (callback) => {
      async.timesLimit(NUM_USERS, 10, (n, next) => {
        console.log(`Starting request ${n + 1}`);
        performRequest((err, responseTime) => {
          if (err) {
            console.error(`Error on request ${n + 1}:`, err);
          } else {
            console.log(`Request ${n + 1} completed with response time: ${responseTime} ms`);
          }
          requestsInCurrentSecond++;
          next(err);
        });
      }, callback);
    },
    (err) => {
      clearInterval(logProgress);
      if (err) {
        console.error('Error during load test:', err);
        done(err);
      } else {
        const averageResponseTime = totalResponseTime / totalRequests;
        console.log('--- Final Results ---');
        console.log(`Total Requests: ${totalRequests}`);
        console.log(`Average Response Time: ${averageResponseTime.toFixed(2)} ms`);
        done();
      }
    }
  );
  setTimeout(() => {
    console.log('Test logic complete.');
    callback(); // Notifie Jest que le test est terminé
  }, 10 * 60 * 1000); // 10 minutes
}

describe('Performance Test', () => {
  it('should handle 1000 users for 10 minutes', (done) => {
    const startTime = Date.now();
    const logInterval = setInterval(() => {
      console.log(`Time elapsed: ${(Date.now() - startTime) / 1000}s`);
    }, 1000);

    runLoadTest(() => {
      clearInterval(logInterval); // Nettoyer l'intervalle pour éviter un handle ouvert
      console.log('Performance test completed.');
      done();
    });
  });
});