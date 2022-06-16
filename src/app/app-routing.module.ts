import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentLoansPageComponent } from './components/current-loans-page/current-loans-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'loans', pathMatch: 'full' },
  { path: 'loans', component: CurrentLoansPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
