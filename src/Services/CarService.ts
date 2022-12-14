import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import NotFoundError from '../errors/NotFoundError';
import UnprocessableError from '../errors/UnprocessableError';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  carODM: CarODM;
  notFoundMessage: string;
  mongoIdMessage: string;

  constructor() {
    this.carODM = new CarODM();
    this.notFoundMessage = 'Car not found';
    this.mongoIdMessage = 'Invalid mongo id';
  }

  public async carRegistration(car: ICar) {
    const newCar = await this.carODM.create(car);
    return new Car(newCar);
  }

  public async findAllCars() {
    const cars = await this.carODM.findAll();
    return cars.map((car) => new Car(car));
  }

  public async findCarById(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.carODM.findById(id);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Car(result);
  }

  public async updateCar(id: string, car: ICar) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.carODM.update(id, car);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Car(result);
  }

  public async deleteCar(id: string) {
    if (!isValidObjectId(id)) throw new UnprocessableError(this.mongoIdMessage);
    const result = await this.carODM.delete(id);
    if (!result) throw new NotFoundError(this.notFoundMessage);
    return new Car(result);
  }
}
