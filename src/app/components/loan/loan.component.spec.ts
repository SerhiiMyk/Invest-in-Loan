import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanComponent } from './loan.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  const mockLoanData = {
    id: 1,
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'A',
    available: 11959,
    annualised_return: 8.60,
    term_remaining: 864000,
    ltv: 48.80,
    amount: 85754
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    component.loan = mockLoanData
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loan title', () => {
    const loanTitleEl = fixture.debugElement.query(By.css('.loan-title')).nativeElement
    expect(loanTitleEl.innerText).toEqual(mockLoanData.title);
  });

  it('should display loan details', () => {
    const loanDetailsEl = fixture.debugElement.query(By.css('.loan-details')).nativeElement
    expect(loanDetailsEl.innerText).toBeTruthy()
  });

  it('should display button div and button', () => {
    const buttonDivEl = fixture.debugElement.query(By.css('.button-div')).nativeElement
    expect(buttonDivEl).toBeTruthy()
    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement
    expect(buttonEl).toBeTruthy()
  });

  it('should display loan indication text - Invested if showIndication is true', () => {
    component.showIndication = true
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css('.loan-indication')).nativeElement.innerText).toEqual('Invested')
  });

  it('should display invested-popup on loan-invest-button clicked',
    () => {
      expect(fixture.debugElement.query(By.css('app-invest-popup'))).toBeFalsy()
      fixture.debugElement.query(By.css('button')).nativeElement.click()
      fixture.detectChanges()
      expect(fixture.debugElement.query(By.css('app-invest-popup')).nativeElement).toBeTruthy()
    });

  it('should call emitHandler method when popup emit data',
    () => {
      spyOn(component, 'emitHandler')
      component.showPopup = true
      fixture.detectChanges()
      const popupEl = fixture.debugElement.query(By.css('app-invest-popup'))
      popupEl.triggerEventHandler('popupEmit', false)
      expect(component.emitHandler).toHaveBeenCalledWith(false)
    });

  it('emitHandler method depending on emit value should close invested-popup or change loan and show loan indication',
    () => {
      component.emitHandler(true)
      expect(component.showPopup).toEqual(true)
      component.emitHandler(mockLoanData)
      expect(component.loan).toEqual(mockLoanData)
      expect(component.showIndication).toEqual(true)
      expect(component.showPopup).toEqual(false)
    });
});
