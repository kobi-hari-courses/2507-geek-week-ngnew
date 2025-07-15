import { Routes } from '@angular/router';
import { ConverterPage } from './pages/converter-page/converter-page';
import { Dummy } from './pages/dummy/dummy';
import { CONVERTER_CONFIG } from './tokens/converter-config.token';
import { CELSIUS_TO_FARENHEIT, CELSIUS_TO_KELVIN, KELVIN_TO_CELSIUS, METER_TO_YARD } from './models/converter-config';

export const routes: Routes = [
    {
        path: '', redirectTo: 'dummy', pathMatch: 'full'
    },
    {path: 'cel-fa', component: ConverterPage, 
        providers:[
            {provide: CONVERTER_CONFIG, useValue: CELSIUS_TO_FARENHEIT}
        ]
    }, 
    {path: 'cel-kel', component: ConverterPage, 
        providers:[
            {provide: CONVERTER_CONFIG, useValue: CELSIUS_TO_KELVIN}
        ]
    }, 
    {path: 'kel-cel', component: ConverterPage, 
        providers:[
            {provide: CONVERTER_CONFIG, useValue: KELVIN_TO_CELSIUS}
        ]
    }, 
    {path: 'met-ya', component: ConverterPage, 
        providers:[
            {provide: CONVERTER_CONFIG, useValue: METER_TO_YARD}
        ]
    }, 
    {path: 'dummy', component: Dummy}
];
