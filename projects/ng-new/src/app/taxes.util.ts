import { inject } from "@angular/core";
import { VAT_RATIO } from "./vat-ratio.token";

export function calcVat(payment: number): number {
    const ratio = inject(VAT_RATIO);
    return payment * ratio;
}

export function vatCalculator(): (p: number) => number {
    const ratio = inject(VAT_RATIO);
    return (payment: number) => payment * ratio;   

}