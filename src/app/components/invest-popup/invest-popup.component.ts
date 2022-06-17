import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILoan } from '../../interfaces/loan.interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvestInLoanService } from '../../services/invest-in-loan.service';

@Component({
  selector: 'app-invest-popup',
  templateUrl: './invest-popup.component.html',
  styleUrls: ['./invest-popup.component.scss']
})
export class InvestPopupComponent {

  @Input() loan!: ILoan
  @Output() popupEmit: EventEmitter<ILoan | boolean> = new EventEmitter()

  form: FormGroup = new FormGroup({
    invest: new FormControl('', [Validators.required])
  })

  constructor(private investInLoanService: InvestInLoanService) {
  }

  submitForm() {
    this.loan.available -= this.form.value.invest
    this.loan.amount += this.form.value.invest
    this.investInLoanService.invest(this.loan)
    this.popupEmit.emit(this.loan)
  }

  closePopup() {
    this.popupEmit.emit(false)
  }
}
