export default function iterateThroughObject(reportWithIterator) {
  // Converting the iterator to an array of employee names
  const employeesArray = [...reportWithIterator];

  // Joining the array into a string separated by ' | '
  return employeesArray.join(' | ');
}
