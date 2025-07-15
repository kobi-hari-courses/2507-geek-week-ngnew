import { EnvironmentProviders, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { CONVERTER_CONFIG } from "../tokens/converter-config.token";
import { FARENHEIT_TO_CELSIUS } from "../models/converter-config";
import { provideHttpClient } from "@angular/common/http";
import { initMyLib } from "./init-my-lib";

export function provideLib(): EnvironmentProviders {
    return makeEnvironmentProviders([
        {provide: CONVERTER_CONFIG, useValue: FARENHEIT_TO_CELSIUS}, 
        provideHttpClient(), 
        provideAppInitializer(() => initMyLib())

    ])
}