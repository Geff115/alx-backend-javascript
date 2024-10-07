function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }

  const cities = students.filter((student) => student.location === city);
  return cities;
}

export default getStudentsByLocation;
