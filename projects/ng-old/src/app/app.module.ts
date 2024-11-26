import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitService } from './services/init.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, 
      useFactory: (service: InitService) => () => service.init(),
      deps: [InitService], 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
