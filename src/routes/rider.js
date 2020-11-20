const response = require('../libs/svc-response');
const Ride = require('../controller/ride');

const ErrorMessage = 'Something wrong to rider';
const SuccessMessage = 'Success on rider action';

const getRide = async (req, res) => {
  try {
    const condition = {};
    const get = await Ride.get(condition);
    const data = {
      rows: get.rows,
      count: get.count,
    };
    response.success(req, res, 200, SuccessMessage, data);
  } catch (e) {
    response.failed(req, res, 422, ErrorMessage, e);
  }
};

const postRide = async (req, res) => {
  try {
    const post = await Ride.save(req.body);
    response.success(req, res, 200, SuccessMessage, post);
  } catch (e) {
    console.log('ee', e);
    response.failed(req, res, 422, ErrorMessage, e.message);
  }
};

module.exports = function(app) {
  app.post('/rider', postRide);
  app.get('/rider', getRide);
};
