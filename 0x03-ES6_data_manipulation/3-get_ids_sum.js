function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const sumStudentIds = students.reduce((sum, student) => sum + student.id, 0);
  return sumStudentIds;
}

export default getStudentIdsSum;
