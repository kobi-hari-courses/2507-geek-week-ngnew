import { Inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MyService {

    async init() {
        console.log('MyService.init()');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('MyService.init() done');
    }
}