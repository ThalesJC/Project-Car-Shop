import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;
    const newCar = await this.service.carRegistration(car);
    return this.res.status(201).json(newCar);
  }

  public async findAll() {
    const result = await this.service.findAll();
    return this.res.status(200).json(result);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const result = await this.service.findById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}