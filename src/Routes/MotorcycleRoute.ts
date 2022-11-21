import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const route = Router();

route.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
route.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
route.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

export default route;