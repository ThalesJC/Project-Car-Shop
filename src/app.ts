import express from 'express';
import errorMiddleware from './Middleware/ErrorMiddleware';
import carsRoute from './Routes/CarsRoute';
import motorcycleRoute from './Routes/MotorcycleRoute';

const app = express();

app.use(express.json());
app.use(carsRoute);
app.use(motorcycleRoute);
app.use(errorMiddleware);

export default app;
