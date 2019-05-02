import { Injectable } from '@angular/core';

interface Account {
  customerName: string;
  balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class BankServService {


  getBalance( account: Account ): number {
    if( typeof account.customerName !== 'string' || account.customerName === '') {
      throw new Error('CustomerName är felaktigt')
    }
    if ( account.balance < 0 || isNaN(account.balance) ) {
      throw new Error('Account Balance är felaktigt')
    }
    else {
      return account.balance
    }
    }

  deposit(account: Account, amount: number): void {
    if(typeof account.customerName !== 'string' || account.customerName === '' ) {
      throw new Error('CustomerName är felaktigt')
    }
    if (account.balance <= 0 || isNaN(account.balance) ) {
      throw new Error('Account Balance är felaktigt')
    }
    if (amount <= 0 || isNaN(amount)) {
      throw new Error('Talet du sätter in måste vara korrekt');
    }
    else {
      account.balance += amount;
    }
  }

  withdraw(account: Account, amount: number): void {
    if( typeof account.customerName !== 'string' || account.customerName === '') {
      throw new Error('CustomerName är felaktigt')
    }
    if (account.balance <= 0 || isNaN(account.balance) ) {
      throw new Error('Account Balance är felaktigt')
    }
    if (amount <= 0 || isNaN(amount)) {
      throw new Error('Talet du vill ta ut måste vara korrekt');
    }
    if(amount > account.balance) {
      throw new Error('Talet du vill ta ut får ej vara större än Account Balance')
    }
    else {
      account.balance - amount;
    }
  }

  transfer(from: Account, to: Account, amount: number): void {
    if ( typeof from.customerName !== 'string' || from.customerName === '') {
      throw new Error('CustomerName är felaktigt, kontrollera "from" Account')
    }
    if (from.balance <= 0 || isNaN(from.balance)) {
      throw new Error('Balance är felaktigt, kontrollera "from" Account')
    }
    if ( typeof to.customerName !== 'string' || to.customerName === '') {
      throw new Error('CustomerName är felaktigt, kontrollera "to" Account')
    }
    if (to.balance <= 0 || isNaN(to.balance)) {
      throw new Error('Balance är felaktigt, kontrollera "to" Account')
    }
    if (amount > from.balance) {
      throw new Error('Talet du vill föra över får inte vara större än Account Balance')
    }
    else {
      from.balance -= amount;
      to.balance += amount;
    }
  }

  constructor() { }
}
