// it is actully injectable in the sense that you can inject IT

// but you cannot inject INTO it
export class NonInjectableService {
    constructor() {
        console.log('The non injectable was created');
    }
}