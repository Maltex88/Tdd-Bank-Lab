import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankComponent } from './bank.component';

import { BankServService } from '../bank-serv.service';

describe('BankComponent', () => {
  let component: BankComponent;
  let service: BankServService;
  let fixture: ComponentFixture<BankComponent>;
  let domElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankComponent ],
      providers: [BankServService]
    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    service = TestBed.get(BankServService);
    component = fixture.componentInstance;
    domElement = fixture.nativeElement;
    fixture.detectChanges();
  });


   it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should exist div to show account info with class accInfo', () => {
    let accDiv = domElement.querySelector('.accInfo')
    expect(accDiv).toBeTruthy();
 });

 it('should exist a paragraf element with the class accountBalance', () => {
   let accBalance = domElement.querySelector('.accountBalance');
   expect(accBalance).toBeTruthy();
});

// det ska finnas ett textfält där användaren kan skriva in ett belopp
it('should exist input field to handle withdraws and deposits ', () => {
  let whithdrawDepsit = domElement.querySelector('.withdrawDeposit');
  expect(whithdrawDepsit).toBeTruthy();
});
// det ska finnas en funktion som kan köras för att ta ut det inskrivna beloppet från kontot
it('should exist a withdraw functions', () => {
  let exampleAccount = { customerName: 'Oskar Olsson', balance: 4000 };
  let actual = service.withdraw(exampleAccount, 900);
  expect(actual).toBe();
});
// det ska finnas en knapp som kör funktionen när man klickar på den
it('should exist a button that runs the withdraw function', () => {
  let withdrawButton = domElement.querySelector('.withdrawButton');
  expect(withdrawButton).toBeTruthy();
});

// det ska finnas en funktion som kan köras för att sätta in det inskrivna beloppet på kontot
it('should exist a function to deposit', () => {
  let exampleAccount = { customerName: 'Oskar Olsson', balance: 4000 };
  let actual = service.deposit(exampleAccount, 900);
  expect(actual).toBe();
});


describe('mock service', () => {
  it('should mock the withdraw function', () => {
    let exampleAccount = { customerName: 'Oskasr Olsson', balance: 4000 };
    let amount = 1000;
    let expectedResult = exampleAccount.balance - amount;
    let mockService = jasmine.createSpyObj(['withdraw']);
    mockService.withdraw.and.returnValue(expectedResult);
    let component = new BankComponent(mockService);

    component.withdrawButtonClick();

    expect(mockService.withdraw).toHaveBeenCalled();
    expect(component.result).toBe(expectedResult);
  })

  it('should mock the deposit function', () => {
    let exampleAccount = { customerName: 'Oskasr Olsson', balance: 4000 };
    let amount = 1000;
    let expectedResult = exampleAccount.balance + amount;
    let mockService = jasmine.createSpyObj(['deposit']);
    mockService.deposit.and.returnValue(expectedResult);
    let component = new BankComponent(mockService);

    component.depositButtonClick();

    expect(mockService.deposit).toHaveBeenCalled();
    expect(component.result).toBe(expectedResult);
  })
})
});





















// komponenten ska använda sig av BankService för att hämta saldot, göra insättning och göra uttag

// det ska finnas en knapp som kör funktionen när man klickar på den
// (överföring stöds inte i den här versionen av appen)
//
//   det ska finnas en komponent med namnet Bank
