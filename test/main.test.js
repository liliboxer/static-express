// test pathing correctly 
const request = require('supertest');
const app = require('../lib/app');

describe('pathing', () => {
  it('path / returns list of colors', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Colors'));
      });
  });
})
;
