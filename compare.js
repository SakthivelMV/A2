let obj1 = {
    person1: 'name',
    age: '25',
}

let obj2 = {
    person1: 'name2',
    age: '25',
}

let equal = true

Object.keys(obj1).map(value=>{
    if (obj1[value] === obj2[value]){
        equal = false;
    }
})
console.log(equal)