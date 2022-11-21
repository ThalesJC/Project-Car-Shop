import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = this.req.body;
    const result = await this.service.MotorcycleRegistration(motorcycle);
    return this.res.status(201).json(result);
  }

  public async findAll() {
    const result = await this.service.findAllMotorcycles();
    return this.res.status(200).json(result);
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const result = await this.service.findMotorcycleById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const motorcycle: IMotorcycle = this.req.body;
      const result = await this.service.updateMotorcycle(id, motorcycle);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
