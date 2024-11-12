const student = {
    name : 'giorgio',
    age :  50 ,
    grade : 'professore',
    school : 'universtà'
 }

 const lista = Object.entries(student);
 
 console.log(lista)
 

lista.forEach((chiave , valore) => {
   console.log( `${chiave}: ${valore}`
    )})


