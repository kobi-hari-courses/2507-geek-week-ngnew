import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CONVERTER_CONFIG } from './tokens/converter-config.token';
import { CELSIUS_TO_FARENHEIT } from './models/converter-config';
import { provideLib } from './my-lib/provide-lib';
import { ROUTER_ACTIVE_CLASS } from './tokens/router-active-class.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideLib(),
    {
      provide: CONVERTER_CONFIG, 
      useValue: CELSIUS_TO_FARENHEIT 
    }, 
    {provide: ROUTER_ACTIVE_CLASS, useValue: 'here'}
  ]
};
