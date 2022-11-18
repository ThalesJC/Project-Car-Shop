import { Model } from 'mongoose';
import { expect } from 'chai';
import sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';

describe('Crie a rota onde seja possível cadastrar um novo carro', function () {
  it('Deve ser possível cadastrar um novo carro com SUCESSO', async function () {
    // arrange
    const newCarInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const newCarOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(newCarOutput);

    // act
    const service = new carService();
    const result = await service.carRegistration(newCarInput);

    // assert
    expect(result).to.be.deep.equal(newCarOutput);
  });
});