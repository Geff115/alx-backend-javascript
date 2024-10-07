function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }

  const ids = arrayObject.map((student) => student.id);
  return ids;
}

export default getListStudentIds;
