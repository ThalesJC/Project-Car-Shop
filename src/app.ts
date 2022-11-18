import express from 'express';
import errorMiddleware from './Middleware/ErrorMiddleware';
import carsRoute from './Routes/CarsRoute';

const app = express();

app.use(express.json());
app.use(carsRoute);
app.use(errorMiddleware);

export default app;
