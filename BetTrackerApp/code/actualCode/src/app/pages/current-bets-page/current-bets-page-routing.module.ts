import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentBetsPagePage } from './current-bets-page.page';
import{ PreviousBetsPagePageModule } from '../previous-bets-page/previous-bets-page.module'

const routes: Routes = [
  {
    path: '',
    component: CurrentBetsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentBetsPagePageRoutingModule {}
