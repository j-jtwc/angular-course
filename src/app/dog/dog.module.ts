import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogRoutingModule } from './dog-routing.module';
import { DogComponent } from './dog.component';
import commonLib from '../common-module';


@NgModule({
  declarations: [
    DogComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    ...commonLib
  ]
})
export class DogModule { }
