export default function getIdsSum(students) {
  return students.reduce((agg, student) => agg + student.id, 0);
}
