let arr = [1,2,3,4,5,6,7] ;

for(let i = 0; i < arr.length /2  ; i++ ){
    
    let opposto = arr.length - 1 -i;

    let temp= arr[i];
    arr[i]= arr[opposto];
    arr[opposto]= temp;
}

console.log(arr);
