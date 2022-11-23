import { Router } from 'express';
import CarController from '../Controllers/CarController';

const route = Router();

route.post('/cars', (req, res, next) => new CarController(req, res, next).create());
route.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
route.get('/cars/:id', (req, res, next) => new CarController(req, res, next).findById());
route.put('/cars/:id', (req, res, next) => new CarController(req, res, next).update());
route.delete('cars/:id', (req, res, next) => new CarController(req, res, next).delete());

export default route;