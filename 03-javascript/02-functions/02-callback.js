const students = {
    maru: 87,
    'grumpy cat': 65,
    Taylor: 20,
    Bob: 56,
    Timmy: 90
};

const checkGrades = function( students, onStruggle ) {
    for( let name of Object.keys(students) ) {
        if( students[name] < 80 ) {
            onStruggle(name, students[name]);
        }
    }
};

const tellTeacher = function( student, grade ) {
    console.log(`${student} is getting a ${grade}`);
}

checkGrades(students, tellTeacher);