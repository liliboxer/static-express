// test pathing correctly 
const request = require('supertest');

describe('pathing', () => {
  it('path / returns list of colors', () => {
    return request(app)
      .get('/')
      .then(res => {})
  })
})