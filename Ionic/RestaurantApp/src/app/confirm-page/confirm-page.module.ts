import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPagePageRoutingModule } from './confirm-page-routing.module';

import { ConfirmPagePage } from './confirm-page.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ConfirmPagePageRoutingModule
  ],
  declarations: [ConfirmPagePage]
})
export class ConfirmPagePageModule {}
