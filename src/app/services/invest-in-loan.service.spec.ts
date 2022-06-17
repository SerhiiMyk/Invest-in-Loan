import { TestBed } from '@angular/core/testing';
import { InvestInLoanService } from './invest-in-loan.service';

describe('InvestInLoanService', () => {
  let service: InvestInLoanService;

  const changedLoan = {
    id: 1,
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'D',
    available: 11959,
    annualised_return: 10.60,
    term_remaining: 864000,
    ltv: 50.80,
    amount: 100754
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestInLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLoans method should return mock observable object', () => {
    service.getLoans().subscribe(data => expect(data).toEqual(service.loansObj))
  });

  it('invest method should change loansObj and call generateTotalAmount method', () => {
    spyOn(service, 'generateTotalAmount')
    service.invest(changedLoan)
    expect(service.loansObj.loans[0]).toEqual(changedLoan)
    expect(service.generateTotalAmount).toHaveBeenCalled()
  });

  it('generateTotalAmount should calculate sum of available property each loan and pass this ' +
    'value to the totalAmount subject', () => {
    service.totalAmount.subscribe(value => expect(value).toEqual(55723))
    service.generateTotalAmount()
  });
});
