const fs = require('fs');

// Define the countStudents function
module.exports = function countStudents(pathToFile) {
  return new Promise((resolve, reject) => {
    // Read the CSV file asynchronously
    fs.readFile(pathToFile, 'utf-8', (err, data) => {
      // Reject the promise if there's an error in reading the file
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      // Split data by lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Process students, skipping the header line
      const students = lines.slice(1).map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });

      // Count students in each field
      const fields = {};

      students.forEach((student) => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      });

      // preparing the result string
      console.log(`Number of students: ${students.length}`);

      Object.keys(fields).forEach((field) => {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });

      // Resolve the Promise when done
      return resolve();
    });
  });
};
