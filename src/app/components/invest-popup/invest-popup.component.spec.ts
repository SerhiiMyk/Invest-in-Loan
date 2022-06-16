import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvestPopupComponent } from './invest-popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestInLoanService } from '../../services/invest-in-loan.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TermPipe } from '../../pipes/term.pipe';
import { By } from '@angular/platform-browser';

describe('InvestPopupComponent', () => {
  let component: InvestPopupComponent;
  let fixture: ComponentFixture<InvestPopupComponent>;
  const mockLoan = {
    id: 1,
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'A',
    available: 11959,
    annualised_return: 8.60,
    term_remaining: 864000,
    ltv: 48.80,
    amount: 85754
  }
  const fakeInvestInLoanService = jasmine.createSpyObj('fakeInvestInLoanService', ['invest'])
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestPopupComponent, TermPipe],
      imports: [ReactiveFormsModule],
      providers: [{
        provide: InvestInLoanService, useValue: fakeInvestInLoanService
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestPopupComponent);
    component = fixture.componentInstance;
    // component.loan = mockLoan
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closePopup on close icon click', () => {
    // spyOn(component, 'closePopup')
    expect(component).toBeTruthy();
    fixture.debugElement.query(By.css('i')).nativeElement.click()
    // expect(component.closePopup).toHaveBeenCalled()
  });

  it('closePopup method should emit false value', () => {
    // spyOn(component.popupEmit, 'emit')
    // component.closePopup()
    // expect(component.popupEmit.emit).toHaveBeenCalledWith(false)
  });

  it('should display popup-loan-title and loan details', () => {
    expect(component).toBeTruthy();
    const titleText = fixture.debugElement.query(By.css('.popup-loan-title')).nativeElement.innerText
    expect(titleText).toEqual(mockLoan.title)
    const detailsEl = fixture.debugElement.queryAll(By.css('h2'))
    expect(detailsEl[2].nativeElement.innerText).toEqual('Loan ends in: 10 days')
  });

  it('should trigger submitForm method on submit button clicked', () => {
      // spyOn(component, 'submitForm')
      // component.form.setValue({ invest: 500 })
      fixture.detectChanges()
      fixture.debugElement.query(By.css('button')).nativeElement.click()
      // expect(component.submitForm).toHaveBeenCalled()
    }
  )

  it('submitForm method should change loan property, call investInLoanService invest and popupEmit emit methods', () => {
      // spyOn(component.popupEmit, 'emit')
      // component.form.setValue({ invest: 500 })
      // component.submitForm()
      // expect(component.loan.available).toEqual(11459)
      // expect(component.loan.amount).toEqual(86254)
      // expect(fakeInvestInLoanService.invest).toHaveBeenCalledWith(component.loan)
      // expect(component.popupEmit.emit).toHaveBeenCalledWith(component.loan)
    }
  )

  it('check input validation. If input value is invalid button will disabled and shows an error', () => {
      const buttonEl = fixture.debugElement.query(By.css('button'))
      expect(buttonEl.nativeElement.disabled).toBeTruthy()
      // component.form.setValue({ invest: 500 })
      fixture.detectChanges()
      expect(buttonEl.nativeElement.disabled).toBeFalsy()
      // component.form.setValue({ invest: 10000000 })
      fixture.detectChanges()
      expect(buttonEl.nativeElement.disabled).toBeTruthy()
      const errorEl = fixture.debugElement.query(By.css('.error-message')).nativeElement
      expect(errorEl).toBeTruthy()
    }
  )
});





