import chai from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
// import app from '../../../src/app';
import CarService from '../../../src/Services/CarService';

const { expect } = chai;

describe('Crie um endpoint para listar is carros', function () {
//   it('Não será possível listar um carro que nao exista!', async function () {
//     // arrange
//     // act
//     const service = new CarService();
//     const forceError = service.findById('123Id3rr4d0321');
//     // assert
//     expect().to.be.equal({ message: 'Car not found' });
//   });
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
    const result = await service.findAll();
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
    const result = await service.findById('634852326b35b59438fbea31');
    // assert
    expect(result).to.be.deep.equal(theCar);
  });
});