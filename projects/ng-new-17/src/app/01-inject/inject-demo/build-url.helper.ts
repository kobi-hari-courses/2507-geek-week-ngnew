import { inject } from "@angular/core";
import { ConfigService } from "./config.service";

export function buildUrl(api: string): string {
    const configService = inject(ConfigService);
    return `${configService.url}/api/${api}`
}