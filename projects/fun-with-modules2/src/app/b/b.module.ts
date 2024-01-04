import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CModule } from '../c/c.module';
import { MY_NUMBER } from '../my-number.token';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    CModule
  ], 
  exports: [
    CModule
  ], 
  providers: [
    {provide: MY_NUMBER, useValue: 50,multi: true}
  ]
})
export class BModule { }
