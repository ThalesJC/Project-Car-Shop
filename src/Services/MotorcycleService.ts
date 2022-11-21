import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import NotFoundError from '../errors/NotFoundError';
import UnprocessableError from '../errors/UnprocessableError';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  motorcycleODM: MotorcycleODM;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
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
    if (!isValidObjectId(id)) throw new UnprocessableError('Invalid mongo id');
    const result = await this.motorcycleODM.findById(id);
    if (!result) throw new NotFoundError('Motorcycle not found');
    return new Motorcycle(result);
  }

  public async updateMotorcycle(id: string, car: IMotorcycle) {
    if (!isValidObjectId(id)) throw new UnprocessableError('Invalid mongo id');
    const result = await this.motorcycleODM.update(id, car);
    if (!result) throw new NotFoundError('Motorcycle not found');
    return new Motorcycle(result);
  }
}