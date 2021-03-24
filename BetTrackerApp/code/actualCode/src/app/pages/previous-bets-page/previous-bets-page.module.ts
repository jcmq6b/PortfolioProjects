import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviousBetsPagePageRoutingModule } from './previous-bets-page-routing.module';

import { PreviousBetsPagePage } from './previous-bets-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviousBetsPagePageRoutingModule
  ],
  declarations: [PreviousBetsPagePage]
})
export class PreviousBetsPagePageModule {}
