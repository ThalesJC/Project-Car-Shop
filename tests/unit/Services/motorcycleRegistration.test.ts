import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Crie uma rota onde seja possível cadastrar uma nova moto!', function () {
  it('Deve ser possível cadastrar uma nova moto com SUCESSO!', async function () {
    Sinon.restore();
    // arrange
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output: Motorcycle = new Motorcycle({
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    });
    Sinon.stub(Model, 'create').resolves(output);
    // act
    const service = new MotorcycleService();
    const result = await service.MotorcycleRegistration(input);
    // assert
    expect(result).to.be.deep.equal(output);
  });
});