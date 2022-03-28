import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsolePageRoutingModule } from './console-routing.module';

import { ConsolePage } from './console.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsolePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsolePage]
})
export class ConsolePageModule {}
