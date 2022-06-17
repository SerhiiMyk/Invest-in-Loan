import { Component, Input } from '@angular/core';
import { ILoan } from '../../interfaces/loan.interfaces';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent {

  @Input() loan!: ILoan

  showPopup = false
  showIndication = false

  emitHandler(data: ILoan | boolean) {
    if (typeof data !== 'boolean') {
      this.loan = data
      this.showIndication = true
      this.showPopup = false
    } else {
      this.showPopup = data
    }
  }
}
