import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MyService {
    constructor() {
        console.log('My Service Created');
    }
}