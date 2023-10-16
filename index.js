const arr = ['banana', true, 1, 'car', {}, { a: 1 }, 5, true, true, false, 455, {}];

const fun1 = (arr) => {
    return arr.map((item) => (typeof item) === "number" ? item * 2 : item);
}

const fun2 = (arr) => {
    const result  = {};
    arr.forEach((item) => {
        const type = typeof item;
        if (Object.hasOwn(result, type)){
            result[type] += 1;
        } else {
            result[type] = 1;
        }
    });
    return result;
}

const fun3 = (arr) => {
    const filterArr = [];
    const categories = {
        'boolean': [],
        "string": [],
        "number": [],
        "object": []
    };
    arr.forEach(item => {
        categories[typeof item].push(item);
    });
    filterArr.push(...categories.boolean, ...categories.number, ...categories.string, ...categories.object)
    return filterArr;
}

const fun4 = (...params) => {
    return params.map((item) => item * [...params].length);
}

const fun5 = (arr) => {
    const amountWords = {};
    arr.forEach(word => {
        if (Object.hasOwn(amountWords, word)){
            amountWords[word] += 1;
        } else{
            amountWords[word] = 1;
        }
    })
    const set = new Set(arr);
    const filterArr = [...set].sort((a, b) => {
        if (amountWords[a] !=  amountWords[b]) return amountWords[b] - amountWords[a]
        else if (amountWords[a] > amountWords[b]) return a - b;
    })
    return filterArr;

}

//console.log(fun1(arr))
//console.log(fun2(arr));
//console.log(fun3(arr));
//console.log(fun4(3, 4, 5, 6, 10))
console.log(fun5(['fruit', 'keyboard', 'word', 'word', 'keyboard', 'word', 'fruit', 'banana']))
