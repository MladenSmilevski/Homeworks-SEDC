fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
  .then((response) => {
    return response.json()
    
  })
  .then((a) => {
    // console.table(a)
    a.forEach(person => console.log(`${person.firstName} ${person.lastName} is comming from ${person.city}, he is ${person.age} years old and he is ${person.averageGrade > 1 ? "passing" : "failing"} the class`))
    let maleStudentNotFromSkopje = a.filter(student => student.gender === "Male" && student.city !== "Skopje");
    console.table(maleStudentNotFromSkopje);
    let femaleStudentsOverSeventeen = a.filter(student => student.gender === "Female" && student.age > 17);
    console.table(femaleStudentsOverSeventeen);
    let averageAgeOfAllStudents = (a.reduce((x, b) => x += b.age, 0)/a.length).toFixed(2)
    console.log(averageAgeOfAllStudents)
    let femaleLastnameEndingA = a.filter(student => student.gender === "Female" && student.lastName[student.lastName.length-1].toLowerCase() === "a");
    console.table(femaleLastnameEndingA)
  });
  



  

  
