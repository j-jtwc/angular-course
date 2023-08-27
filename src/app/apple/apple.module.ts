import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleRoutingModule } from './apple-routing.module';
import { AppleComponent } from './apple.component';
import commonLib from '../common-module';
import { CatModule } from '../cat/cat.module';


@NgModule({
  declarations: [
    AppleComponent
  ],
  imports: [
    CommonModule,
    AppleRoutingModule,
    ...commonLib,
    CatModule
  ]
})
export class AppleModule { }
