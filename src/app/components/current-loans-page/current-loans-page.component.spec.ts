import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentLoansPageComponent } from './current-loans-page.component';
import { By } from '@angular/platform-browser';
import { ILoansObj } from '../../interfaces/loan.interfaces';
import { InvestInLoanService } from '../../services/invest-in-loan.service';
import { BehaviorSubject, of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrentLoansPageComponent', () => {
  let component: CurrentLoansPageComponent;
  let fixture: ComponentFixture<CurrentLoansPageComponent>;

  const mockLoansObj:ILoansObj = {
    loans: [
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
      }
    ]
  }
  const fakeInvestInLoanService = jasmine.createSpyObj('fakeInvestInLoanService',['totalAmount','getLoans'])
  fakeInvestInLoanService.getLoans.and.returnValue(of(mockLoansObj))
  fakeInvestInLoanService.totalAmount = new BehaviorSubject(43364)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentLoansPageComponent],
      providers:[{
        provide:InvestInLoanService,useValue:fakeInvestInLoanService
      }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLoansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get loansObj and totalAmount values from investInLoanService service during onInit', () => {
    expect(component.loansObj).toEqual(mockLoansObj)
    expect(component.totalAmount).toEqual(43364)
  });

  it('should display title', () => {
    const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement
    expect(titleEl.innerText).toEqual('Current Loans');
  });

  it('should display loans', () => {
    const loansEl = fixture.debugElement.queryAll(By.css('.loans-div'))
    expect(loansEl).toBeTruthy();
    expect(loansEl.length).toEqual(2);
  });

  it('should display total amount header:', () => {
    const totalAmountHeaderEl = fixture.debugElement.query(By.css('.total-amount-header')).nativeElement.innerText
    expect(totalAmountHeaderEl).toEqual('Total amount available for investment:');
  });

  it('should display total amount value:', () => {
    const totalAmountValueEl = fixture.debugElement.query(By.css('.total-amount-value')).nativeElement.innerText
    expect(totalAmountValueEl).toEqual('$43,364');
  });
});
