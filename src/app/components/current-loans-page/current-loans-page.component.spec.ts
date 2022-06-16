import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLoansPageComponent } from './current-loans-page.component';

describe('CurrentLoansPageComponent', () => {
  let component: CurrentLoansPageComponent;
  let fixture: ComponentFixture<CurrentLoansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentLoansPageComponent ]
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
});
