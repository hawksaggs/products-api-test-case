const supertest = require('supertest');
const app = require('../index');

describe('Test product API', function () {

    it('testing framework should works', function () {
        expect(2).toBe(2);
    });

    it('should return 200 for base route', async function (done) {
        const response = await supertest(app).get('/');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        done();
    });
});