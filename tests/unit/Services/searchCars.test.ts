import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
// import app from '../../../src/app';
import CarService from '../../../src/Services/CarService';

describe('Crie um endpoint para listar is carros', function () {
  afterEach(function () { Sinon.restore(); });
  it('Não será possível listar um carro que nao exista!', async function () {
    // arrange
    const id = '634852326b35b59438fbea31';
    Sinon.stub(Model, 'findById').resolves(null);
    // act
    const service = new CarService();
    try {
      await service.findCarById(id);
    } catch (error) {
      // assert
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  });
  it('Não será possível listar um carro com o mongoId inválido!', async function () {
    // arrange
    const id = 'IdQu4lqu3r';
    Sinon.stub(Model, 'findById').resolves(false);
    // act
    const service = new CarService();
    try {
      await service.findCarById(id);
    } catch (error) {
      // assert
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });
  it('deve ser possível listar todos os carros através da rota "/cars"!', async function () {
    // arrange
    const allCars = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: true,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    Sinon.stub(Model, 'find').resolves(allCars);
    // act
    const service = new CarService();
    const result = await service.findAllCars();
    // assert
    expect(result).to.be.deep.equal(allCars);
  });
  it('deve ser possível listar um carro específico através da rota "/cars/id"!', async function () {
    // arrange
    const theCar = {
      id: '634852326b35b59438fbea31',
      model: 'Tempra',
      year: 1995,
      color: 'Black',
      status: true,
      buyValue: 39,
      doorsQty: 2,
      seatsQty: 5,
    };
    Sinon.stub(Model, 'findById').resolves(theCar);
    // act
    const service = new CarService();
    const result = await service.findCarById('634852326b35b59438fbea31');
    // assert
    expect(result).to.be.deep.equal(theCar);
  });
});