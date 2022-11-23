import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const route = Router();
const motorcyclesIdRoute = '/motorcycles/:id';

route.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
route.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
route.get(
  motorcyclesIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);
route.put(
  motorcyclesIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);
route.delete(
  motorcyclesIdRoute,
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default route;