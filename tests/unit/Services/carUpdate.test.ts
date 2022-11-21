import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Crie um endpoint onde seja possível atualizar um carro', function () {
  it('Deve ser possível atualizar um carro através da rota "/cars/:id"', async function () {
    // arrange
    const input: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const output = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    });
    const id = '6348513f34c397abcad040b2';
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(output);
    // act
    const service = new CarService();
    const result = await service.updateCar(id, input);
    // assert
    expect(result).to.be.deep.equal(output);
  });
});