function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const listOfString = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      const restOfString = element.substring(startString.length);
      listOfString.push(restOfString);
    }
  }
  const newString = listOfString.join('-');

  return newString;
}

export default cleanSet;
