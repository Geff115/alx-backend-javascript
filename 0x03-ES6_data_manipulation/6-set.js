function setFromArray(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return new Set(array);
}

export default setFromArray;
