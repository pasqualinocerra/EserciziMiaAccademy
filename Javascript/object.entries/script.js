const student = {
    name : 'giorgio',
    age :  50 ,
    grade : 'professore',
    school : 'universtà'
 }
 student.forEach(function(key,value) {
    console.log(key + value)
 });
 console.log(Object.entries(student))

