const frisby = require('frisby');
const Joi = require('joi');

describe('Test login', function () {
  it('test for login', function () {
    return frisby.post('https://www.jobify.live/register',{
        email: Joi.string().email(),
        password: Joi.string()
    })
    });
});