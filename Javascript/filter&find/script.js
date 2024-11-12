let students = [
    {name:'pippo', grade:60},
    {name:'franco', grade:90},
    {name:'giovanni', grade:100},
    {name:'filippo', grade:30}
]

let passedStudents = students.filter((students) => students.grade >= 60)

console.log(passedStudents)

let passedStudents2 = students.find((students) => students.grade < 60)

console.log(passedStudents2)
