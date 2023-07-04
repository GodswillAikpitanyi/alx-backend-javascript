export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeObject) {
        student.grade = gradeObject.grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });
}
