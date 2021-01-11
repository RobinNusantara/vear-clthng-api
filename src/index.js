const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const authRoutes = require('./routes/auth-routes');
const userRoutes = require('./routes/user-routes');
const profileRoutes = require('./routes/profile-routes');
const productRoutes = require('./routes/products-routes');
const wishlistRoutes = require('./routes/favorites-routes');
const cartRoutes = require('./routes/cart-routes');
const {ErrorHandler, handleError} = require('./helpers/error');

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/wishlist', wishlistRoutes);
app.use('/api/v1/carts', cartRoutes);

app.use((err, req, res, next) => handleError(err, res));
app.get('/error', (req, res) => {
  throw new ErrorHandler(500, 'Internal server error');
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
