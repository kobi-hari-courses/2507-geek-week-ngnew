import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { VAT_RATIO } from './vat-ratio.token';
import { MyService } from './my-service.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()), 
    {provide: VAT_RATIO, useValue: 0.17}, 
    provideAppInitializer(() => inject(MyService).init())
  
  ]
};
