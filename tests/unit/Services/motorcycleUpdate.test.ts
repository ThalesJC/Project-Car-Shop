import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Crie um endpoint onde seja possível atualizar uma moto!', function () {
  it('Deve ser possível atualizar uma moto através da rota "/motorcycles/:id"', async function () {
    // arrange
    const input: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const output = new Motorcycle({
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    });
    const id = '634852326b35b59438fbea2f';
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(output);
    // act
    const service = new MotorcycleService();
    const result = await service.updateMotorcycle(id, input);
    // assert
    expect(result).to.be.deep.equal(output);
  });
});