export function itut<T>(value: T): any {
    let val = value;

    const res = () => val;
    res.set = (v: T) => {
        val = v;
    }

    return res;

}


let x = itut(10);
x.set(20);
console.log(x());