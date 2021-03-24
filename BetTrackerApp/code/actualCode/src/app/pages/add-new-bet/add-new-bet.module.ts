import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewBetPageRoutingModule } from './add-new-bet-routing.module';

import { AddNewBetPage } from './add-new-bet.page';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewBetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddNewBetPage]
})
export class AddNewBetPageModule {}
