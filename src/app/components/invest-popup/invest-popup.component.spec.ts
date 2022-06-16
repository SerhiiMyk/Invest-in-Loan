import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPopupComponent } from './invest-popup.component';

describe('InvestPopupComponent', () => {
  let component: InvestPopupComponent;
  let fixture: ComponentFixture<InvestPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
