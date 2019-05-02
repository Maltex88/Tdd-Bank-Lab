import { Component, OnInit, NgModule } from '@angular/core';
import { BankServService } from '../bank-serv.service';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  exampleAccount = { customerName: 'Oskar Olsson', balance: 4000 };
  amount: number = 1000;
  result: number = this.exampleAccount.balance;
  constructor( private service: BankServService ) { }

  ngOnInit() {
  }

  withdrawButtonClick() {
    this.service.withdraw(this.exampleAccount, this.amount)
    this.result = this.exampleAccount.balance - this.amount;
    console.log(this.result)
  }
  depositButtonClick() {
    this.service.deposit(this.exampleAccount, this.amount)
    this.result = this.exampleAccount.balance + this.amount;
    console.log(this.result)
  }
}
