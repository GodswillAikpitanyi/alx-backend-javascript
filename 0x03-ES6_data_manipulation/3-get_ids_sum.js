export default function getStudentIdsSum(students) {
  return students.reduce(function(sum, student) {
    return sum + student.id;
  }, 0);
}
