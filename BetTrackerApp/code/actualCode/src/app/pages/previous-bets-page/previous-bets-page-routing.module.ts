import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviousBetsPagePage } from './previous-bets-page.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousBetsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousBetsPagePageRoutingModule {}
