interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' };
const student2: Student = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' };
const studentList: Student[] = [student1, student2];

// Using Vanilla JS to render a table and for each elements in the array, append a new row to the table
const body = document.body;

const table = document.createElement("table"); // Creatping a table element

// Iterating over the student list and create rows
studentList.forEach((student) => {
  const row = document.createElement("tr");

  // Create table data for firstName and location
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append row to the table
  table.appendChild(row);
});

body.appendChild(table);