import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() { }

  async init() {
    console.log('Init started');

    await new Promise((resolve) => setTimeout(resolve, 250));

    console.log('Init finished');
  }
}
