import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentBetsPagePageRoutingModule } from './current-bets-page-routing.module';

import { CurrentBetsPagePage } from './current-bets-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentBetsPagePageRoutingModule
  ],
  declarations: [CurrentBetsPagePage]
})
export class CurrentBetsPagePageModule {}
