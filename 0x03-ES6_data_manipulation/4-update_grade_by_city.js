export default function updateStudentGradeByCity(students, city, newGrades) {
  const filterStudents = students.filter((student) => student.location === city);

  const gradeStudents = filterStudents.map((student) => {
    const updatedStudent = { ...student }; // Create a new object with the same properties
    for (const gradeInfo of newGrades) {
      if (student.id === gradeInfo.studentId) {
        updatedStudent.grade = gradeInfo.grade; // Update the grade of the new object
      }
    }
    if (updatedStudent.grade === undefined) {
      updatedStudent.grade = 'N/A'; // If no grade is found, set it to 'N/A'
    }
    return updatedStudent; // Return the updated object
  });

  return gradeStudents;
}

