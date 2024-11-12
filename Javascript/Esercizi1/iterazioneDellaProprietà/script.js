let person = {
    name : 'mario',
    age : '34' ,
    city : 'milano'
}

person.age = 35;
person.job = 'carabiniere'

for (let proprieta in person) {
    console.log( proprieta , person[proprieta])
        
    }
