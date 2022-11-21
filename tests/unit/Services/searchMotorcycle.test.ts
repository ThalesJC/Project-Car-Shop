import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Crie um endpoint para listar as motos!', function () {
  afterEach(function () { Sinon.restore(); });
  it('Não será possível listar uma moto que não existe!', async function () {
    // arrange
    const id = '634852326b35b59438fbea31';
    Sinon.stub(Model, 'findById').resolves(null);
    // act
    const service = new MotorcycleService();
    try {
      await service.findMotorcycleById(id);
    } catch (error) {
      // assert
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });
  it('Não será possível listar uma moto com o mongoId inválido!', async function () {
    const id = 'IdQu4lqu3r';
    Sinon.stub(Model, 'findById').resolves(false);
    // act
    const service = new MotorcycleService();
    try {
      await service.findMotorcycleById(id);
    } catch (error) {
      // assert
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });
  it('Deve ser possível listar todas as motos através da rota "/motorcycles"!', async function () {
    // arrange
    const output = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    Sinon.stub(Model, 'find').resolves(output);
    // act
    const service = new MotorcycleService();
    const result = await service.findAllMotorcycles();
    // assert
    expect(result).to.be.deep.equal(output);
  });
  it(
    'Deve ser possível listar uma moto específica através da rota "/motorcycles/id"!',
    async function () {
    // arrange
      const output = {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      };
      const id = '634852326b35b59438fbea31';
      Sinon.stub(Model, 'findById').resolves(output);
      // act
      const service = new MotorcycleService();
      const result = await service.findMotorcycleById(id);
      // assert
      expect(result).to.be.deep.equal(output);
    },
  );
});