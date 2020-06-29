let arr = [1, 2, 2, 3, 4, 4, 5];
let newArr=[];
for(let a of arr){
    if(!newArr.includes(a)){
        newArr.push(a)
    }
}

console.log(newArr)