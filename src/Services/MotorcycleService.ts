import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../errors/NotFoundError';
import UnprocessableError from '../errors/UnprocessableError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  motorcycleODM: MotorcycleODM;
  notFoundMessage: string;
  mongoIdMessage: string;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
    this.notFoundMessage = 'Motorcycle not found';
    this.mongoIdMessage = 'Invalid mongo id';
  }

  public async MotorcycleRegistration(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }

  public async findAllMotorcycles() {
    const motorcycles = await this.motorcycleODM.findAll();
    return motorcycles.map((el) => new Motorcycle(el));
  }

  public async findMotorcycleById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.motorcycleODM.findById(id);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Motorcycle(result);
  }

  public async updateMotorcycle(id: string, car: IMotorcycle) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.motorcycleODM.update(id, car);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Motorcycle(result);
  }

  public async deleteMotorcycle(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.motorcycleODM.delete(id);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Motorcycle(result);
  }
}