const frisby = require('frisby');
const Joi = require('joi');

describe('Edit job test', function () {
  it('test for edit in job', function () {
    return frisby.post('https://www.jobify.live/add-jobs',{
        position: Joi.string(),
        company: Joi.string(),
        jobLocation: Joi.string(),
        status: Joi.string().valid('interview','declined','pending'),
        jobType: Joi.string().valid('full-time','part-time','internship','remote')
    })
    });
});