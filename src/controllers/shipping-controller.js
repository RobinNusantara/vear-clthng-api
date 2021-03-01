const axios = require('axios');

axios.defaults.baseURL = process.env.RAJA_ONGKIR_API_URL;
axios.defaults.headers.common['key'] = process.env.RAJA_ONGKIR_API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

async function getProvincies(req, res, next) {
  try {
    const response = await axios.get('/province');
    const {data} = response;
    const {rajaongkir} = data;
    const provincies = rajaongkir.results;

    res.status(201).json({
      status: 'ok',
      message: '',
      results: provincies,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
};

async function getCities(req, res, next) {
  try {
    const id = req.params.provinceId;
    const _id = parseInt(id);

    const response = await axios.get(`city?province=${_id}`);
    const {data} = response;
    const {rajaongkir} = data;
    const cities = rajaongkir.results;

    res.status(201).json({
      status: 'ok',
      message: '',
      results: cities,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function getCosts(req, res, next) {
  try {
    const destination = req.params.destinationId;
    const _destination = parseInt(destination);

    const response = await axios.post('/cost', {
      origin: 256,
      destination: _destination,
      weight: 1000,
      courier: 'jne',
    });

    const {data} = response;
    const {rajaongkir} = data;
    const [results] = rajaongkir.results;

    res.status(201).json({
      status: 'ok',
      message: '',
      results: results.costs,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

module.exports = {getProvincies, getCities, getCosts};
