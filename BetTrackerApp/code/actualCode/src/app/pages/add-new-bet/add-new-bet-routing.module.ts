import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewBetPage } from './add-new-bet.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewBetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewBetPageRoutingModule {}
