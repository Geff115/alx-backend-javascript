// Reading a CSV file

const fs = require('fs');

module.exports = function countStudents(path) {
  let data;
  if (!path) {
    throw new Error('File name must be provided');
  }

  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Splitting the file contents by newline and filter out
  // any empty lines
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // Skip the header line(first element), and map the data into an
  // array of student info
  const students = lines.slice(1).map((line) => {
    const [firstname, lastname, age, field] = line.split(',');
    return {
      firstname, lastname, age, field,
    };
  });

  const fields = {};

  // counting students
  students.forEach((student) => {
    if (!fields[student.field]) {
      fields[student.field] = [];
    }
    fields[student.field].push(student.firstname);
  });

  // Log the total number of students
  console.log(`Number of students: ${students.length}`);

  // Log the number of students in each field
  Object.keys(fields).forEach((field) => {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  });
};
