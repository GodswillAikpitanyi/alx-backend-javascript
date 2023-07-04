export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(function(student) {
      return student.location === city;
    })
    .map(function(student) {
      const gradeObject = newGrades.find(function(grade) {
        return grade.studentId === student.id;
      });

      if (gradeObject) {
        student.grade = gradeObject.grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });
}

