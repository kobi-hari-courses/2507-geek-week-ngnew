import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ConfigService {
    get url() {
        return 'http://whatever.com'
    }
}