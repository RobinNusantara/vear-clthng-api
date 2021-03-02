import { Request, Response } from 'express';
import axios from 'axios';

axios.defaults.baseURL = process.env.RAJA_ONGKIR_API_URL;
axios.defaults.headers.common.key = process.env.RAJA_ONGKIR_API_KEY;

class ShippingController {
  getProvincies = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await axios.get('/province');
      const { rajaongkir } = response.data;
      const provincies = rajaongkir.results;

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull fetch data',
        results: provincies,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  getCities = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      const response = await axios.get(`city?province=${id}`);
      const { rajaongkir } = response.data;
      const cities = rajaongkir.results;

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull fetch data',
        results: cities,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  getCosts = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { origin, destination, weight } = req.params;

      const response = await axios.post('/cost', {
        origin,
        destination,
        weight,
        courier: 'jne',
      });

      const { rajaongkir } = response.data;
      const [results] = rajaongkir.results;

      return res.status(201).json({
        status: 'ok',
        message: '',
        results: results.costs,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };
}

export default new ShippingController();
