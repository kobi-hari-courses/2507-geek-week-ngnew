import { InjectionToken } from "@angular/core";
import { ConverterConfig } from "../models/converter-config";

export const CONVERTER_CONFIG = new InjectionToken<ConverterConfig>('CONVERTER_CONFIG');