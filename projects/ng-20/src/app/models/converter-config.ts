export interface ConverterConfig {
    readonly from: string;
    readonly to: string;
    readonly calcFunc: (val: number) => number
}

export const FARENHEIT_TO_CELSIUS: ConverterConfig = {
    from: 'Farenheit', 
    to: 'Celsius', 
    calcFunc: (val) => (val - 32) * 0.55
}

export const CELSIUS_TO_FARENHEIT: ConverterConfig = {
    from: 'Celsius', 
    to: 'Farenheit', 
    calcFunc: (val) => (val / 0.55) + 32
}

export const KELVIN_TO_CELSIUS: ConverterConfig = {
    from: 'Kelvin', 
    to: 'Celsius', 
    calcFunc: (val) => val - 273.15
}

export const CELSIUS_TO_KELVIN: ConverterConfig = {
    from: 'Celsius', 
    to: 'Kelvin', 
    calcFunc: (val) => val + 273.15
}

export const METER_TO_YARD: ConverterConfig = {
    from: 'Meter', 
    to: 'Yard', 
    calcFunc: (val) => val * 1.09361
}
export const YARD_TO_METER: ConverterConfig = {
    from: 'Yard', 
    to: 'Meter', 
    calcFunc: (val) => val / 1.09361
}
