function cleanSet(set, startString) {
  // Ensuring set is a Set object and startString is a string
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Return an empty string if the startString is empty
  if (startString === '') {
    return '';
  }
  const listOfString = [];

  // Iterate over the set and find values that start with startString
  for (const element of set) {
    if (element.startsWith(startString)) {
      // Append the rest of the string after startString
      const restOfString = element.substring(startString.length);
      listOfString.push(restOfString);
    }
  }

  // Join the values with '-' and return the result
  return listOfString.join('-');
}

export default cleanSet;
