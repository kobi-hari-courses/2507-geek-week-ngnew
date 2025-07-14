import { Inject, Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    readonly apiBase = 'http://localhost:3000/api/books';
    readonly wsBase = 'ws://localhost:3000/ws';

    #keyword = signal<string>('the');

    get keyword() {
        return this.#keyword.asReadonly();
    }

    setKeyword(value: string) {
        console.log('Keyword Changes to', value);
        this.#keyword.set(value);
    }

    constructor(){}
}