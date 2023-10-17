const fun1 = (obj) => {
    return Object.keys(obj).length;
}

const fun2 = (obj) => {
    obj.d = obj.a + obj.c;
    return obj;
}


console.log(fun1({ a: 1, b: 2, c: 3, d: 1 }))
console.log(fun2({ a: 1, b: 2, c: 3 }))
