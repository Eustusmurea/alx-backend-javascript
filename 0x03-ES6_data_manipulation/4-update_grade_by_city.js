export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  const gradeStudents = filterStudents.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade; // Update the grade of the student
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // If no grade is found, set it to 'N/A'
      }
      return student;
    },
  );

  return gradeStudents;
}
