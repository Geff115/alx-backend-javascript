var student1 = { firstName: 'John', lastName: 'Doe', age: 20, location: 'New York' };
var student2 = { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles' };
var studentList = [student1, student2];
// Using Vanilla JS to render a table and for each elements in the array, append a new row to the table
var body = document.body;
var table = document.createElement("table"); // Creatping a table element
// Iterating over the student list and create rows
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    // Create table data for firstName and location
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    // Append row to the table
    table.appendChild(row);
});
body.appendChild(table);
