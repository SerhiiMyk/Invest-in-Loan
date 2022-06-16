import { TestBed } from '@angular/core/testing';

import { InvestInLoanService } from './invest-in-loan.service';

describe('InvestInLoanService', () => {
  let service: InvestInLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestInLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
