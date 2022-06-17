import { Component, OnDestroy, OnInit } from '@angular/core';
import { InvestInLoanService } from '../../services/invest-in-loan.service';
import { ILoansObj } from '../../interfaces/loan.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-loans-page',
  templateUrl: './current-loans-page.component.html',
  styleUrls: ['./current-loans-page.component.scss']
})
export class CurrentLoansPageComponent implements OnInit, OnDestroy {

  loansObj!: ILoansObj
  totalAmount!: number
  sub: Subscription[] = []

  constructor(private investInLoanService: InvestInLoanService) {
  }

  ngOnInit(): void {
    this.sub.push(this.investInLoanService.totalAmount.subscribe(value => {
        this.totalAmount = value
      })
    )
    this.sub.push(this.investInLoanService.getLoans().subscribe(data => {
        this.loansObj = data
      })
    )
  }

  ngOnDestroy(): void {
    this.sub.forEach(item => item.unsubscribe())
  }
}
