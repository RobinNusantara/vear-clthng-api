import { CorsOptions } from 'cors';

const whitelist = [process.env.VEAR_CLTHNG_URL];

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    if (!origin) return callback(null, true);

    if (whitelist.indexOf(origin) === -1) {
      const message = 'Not allowed by Cors.';
      return callback(new Error(message), false);
    }

    return callback(null, true);
  },
};

export default corsOptions;
