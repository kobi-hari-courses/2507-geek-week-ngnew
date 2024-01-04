import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoHttpComponent } from './do-http/do-http.component';
import { HttpClientModule } from '@angular/common/http';
import { MY_NUMBER } from '../my-number.token';


@NgModule({
  declarations: [
    DoHttpComponent
  ],
  imports: [
    CommonModule, 
  ], 
  exports: [
    DoHttpComponent
  ], 
  providers: [
    {provide: MY_NUMBER, useValue: 60, multi: true}
  ]
})
export class CModule { }
