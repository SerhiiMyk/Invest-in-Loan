import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ILoan, ILoansObj } from '../interfaces/loan.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InvestInLoanService {

  loansObj: ILoansObj = {
    'loans': [
      {
        id: 1,
        title: 'Voluptate et sed tempora qui quisquam.',
        tranche: 'A',
        available: 11959,
        annualised_return: 8.60,
        term_remaining: 864000,
        ltv: 48.80,
        amount: 85754
      },
      {
        id: 5,
        title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
        tranche: 'B',
        available: 31405,
        annualised_return: 7.10,
        term_remaining: 1620000,
        ltv: 48.80,
        amount: 85754
      },
      {
        id: 12,
        title: 'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
        tranche: 'C',
        available: 12359,
        annualised_return: 4.80,
        term_remaining: 879000,
        ltv: 48.80,
        amount: 85754
      }
    ]
  }
  totalAmount = new Subject<number>()

  getLoans(): Observable<ILoansObj> {
    this.generateTotalAmount()
    return of(this.loansObj)
  }

  invest(loan: ILoan) {
    this.loansObj.loans.forEach((item, index) => {
      item.id === loan.id ? this.loansObj.loans[index] = loan : this.loansObj
    })
    this.generateTotalAmount()
  }

  generateTotalAmount() {
    this.totalAmount.next(this.loansObj.loans.reduce((acc, value) => {
      acc += value.available
      return acc
    }, 0))
  }
}
