// items.test.js
const request = require('supertest');
const app = require('../index');
let items = require('../fakeDb');

beforeEach(() => {
  items.push({ name: 'popsicle', price: 1.45 });
});

afterEach(() => {
  items.length = 0;
});

describe('GET /items', () => {
  it('should return a list of items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: 'popsicle', price: 1.45 }]);
  });
});

describe('POST /items', () => {
  it('should add an item', async () => {
    const res = await request(app).post('/items').send({ name: 'cheerios', price: 3.40 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ added: { name: 'cheerios', price: 3.40 } });
  });
});

// Add similar tests for PATCH, GET by name, and DELETE
