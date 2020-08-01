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

    it('should have data field array for get product endpoint', async function (done) {
        const response = await supertest(app).get('/products');

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
        expect(response.body).toHaveProperty('data');
        done();
    });
});