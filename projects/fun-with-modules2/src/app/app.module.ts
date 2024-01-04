import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BModule } from './b/b.module';
import { HttpClientModule } from '@angular/common/http';
import { MY_NUMBER } from './my-number.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    BModule
  ],
  providers: [
    {provide: MY_NUMBER, useValue: 42, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
