import { APP_INITIALIZER, ApplicationConfig, ApplicationInitStatus, importProvidersFrom, inject, provideAppInitializer, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InitService } from './services/init.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), 
    provideRouter(routes, withComponentInputBinding()), 
    provideHttpClient(),
    provideAnimations(), 
    provideAppInitializer(() => inject(InitService).init())
  ]
};
