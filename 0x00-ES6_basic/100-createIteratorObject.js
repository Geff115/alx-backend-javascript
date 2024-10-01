export default function createIteratorObject(report) {
  const allEmployees = [];

  // Extracting all employees from each department and push them to the allEmployees array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  // Returning an iterator of all employees
  return allEmployees[Symbol.iterator]();
}
