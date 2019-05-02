import { TestBed } from '@angular/core/testing';

import { BankServService } from './bank-serv.service';

describe('Testing för Saldo', () => {
  let service: BankServService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankServService);
  });

  it('should return balance if account valid', () => {
    let exampleAccount = { customerName: '45', balance: 1 };
    let actual = service.getBalance(exampleAccount)
    expect(actual).toBeTruthy();
  });

  it('should throw a Error if customerName is Invalid', () => {
    let exampleAccount = { customerName: '', balance: 50 };
    let actual = () => service.getBalance(exampleAccount)
    expect(actual).toThrow();
  });

  it('should throw a Error if Balance is invalid', () => {
    let exampleAccount = { customerName: 'Oskar Olsson', balance: -90 };
    let actual = () => service.getBalance(exampleAccount)
    expect(actual).toThrow();
  });

});



describe('Testing för Deposit', () => {

    let service: BankServService
        beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.get(BankServService);
    });


    it('It should exist a function to handle deposits', () => {
      let exampleAccount = { customerName: 'Oskar Olsson', balance: 5000 };
      let actual = service.deposit(exampleAccount, 500);
      expect(actual).toBe();
    });

    it('It should throw a Error if Amount is invalid', () => {
      let exampleAccount = { customerName: 'Oskar Olsson', balance: 4000 };
      let actual = () => service.deposit(exampleAccount, -50);
      expect(actual).toThrow();
    });

    it('It should throw Error if customerName is invalid', () => {
      let exampleAccount = { customerName: '', balance: 4000 };
      let actual = () => service.deposit(exampleAccount, 500);
      expect(actual).toThrow();
    });
    it('It should throw Error if balance is invalid', () => {
      let exampleAccount = { customerName: 'Oskar Olsson', balance: -4000 };
      let actual = () => service.deposit(exampleAccount, 500);
      expect(actual).toThrow();
    });
});


describe('Testing for Whitdraw', () => {
  let service: BankServService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BankServService);
  });

  it('should exist a function to handle withdraws', () => {
    let exampleAccount = { customerName: 'Oskar Olsson', balance: 4000 };
    let actual = service.withdraw(exampleAccount, 900);
    expect(actual).toBe();
  });

  it('should throw error if CustomerName is invalid', () => {
    let exampleAccount = { customerName: '', balance: 4000 };
    let actual = () =>  service.withdraw(exampleAccount, 900);
    expect(actual).toThrow();
  });

  it('should throw error if Balance is invalid', () => {
    let exampleAccount = { customerName: 'Oskar Olsson', balance: -3 };
    let actual = () =>  service.withdraw(exampleAccount, 900);
    expect(actual).toThrow();
  });

  it('should throw error if Amount is invalid', () => {
    let exampleAccount = { customerName: 'Oskar Olsson', balance: 500 };
    let actual = () =>  service.withdraw(exampleAccount, 0);
    expect(actual).toThrow();
  });

  it('should throw error if Amount to withdraw is bigger then Account balance', () => {
    let exampleAccount = { customerName: 'Oskar Olsson', balance: 399 };
    let actual = () =>  service.withdraw(exampleAccount, 400);
    expect(actual).toThrow();
  });
});

  describe('Testing för Transfer', () => {
    let service: BankServService
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.get(BankServService);
    });

    it('should exist a function to handle transfers', () => {
      let exampleAccountFrom = { customerName: 'Oskar Olsson', balance: 4000 };
      let exampleAccountTo = { customerName: 'Oskar Olsson', balance: 200 };
      let actual = service.transfer(exampleAccountFrom, exampleAccountTo, 500);
      expect(actual).toBe();
    });

    it('should throw a Errors if AccountFrom is Invalid', () => {
      let exampleAccountFrom = { customerName: '', balance: 4000 };
      let exampleAccountTo = { customerName: 'Oskar Olsson', balance: 200 };
      let actual = () => service.transfer(exampleAccountFrom, exampleAccountTo, 500);
      expect(actual).toThrow();
    });

    it('should throw a Errors if AccountTo is Invalid', () => {
      let exampleAccountFrom = { customerName: 'Oskar Olsson', balance: 4000 };
      let exampleAccountTo = { customerName: 'Oskar olsson', balance: -200 };
      let actual = () => service.transfer(exampleAccountFrom, exampleAccountTo, 500);
      expect(actual).toThrow();
    });

    it('should throw a Error if Amount is more then the balance of from account', () => {
      let exampleAccountFrom = { customerName: 'Oskar Olsson', balance: 499 };
      let exampleAccountTo = { customerName: 'Oskar olsson', balance: 200 };
      let actual = () => service.transfer(exampleAccountFrom, exampleAccountTo, 500);
      expect(actual).toThrow();
    });


});
