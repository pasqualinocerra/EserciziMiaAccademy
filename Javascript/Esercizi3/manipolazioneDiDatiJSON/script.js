let list=['{"mario":"rossi","giovanni":"rossini"}'];

let newList = JSON.parse(list)

newList = Object.entries(newList);

newList.push(["nicola" , "bianco"])

let NewList = JSON.stringify(newList)

console.log(NewList)
