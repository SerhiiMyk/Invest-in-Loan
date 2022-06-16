import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentLoansPageComponent } from './components/current-loans-page/current-loans-page.component';
import { LoanComponent } from './components/loan/loan.component';
import { InvestPopupComponent } from './components/invest-popup/invest-popup.component';
import { TermPipe } from './pipes/term.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentLoansPageComponent,
    LoanComponent,
    InvestPopupComponent,
    TermPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
