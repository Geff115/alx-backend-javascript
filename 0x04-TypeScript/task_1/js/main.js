var TeacherClass = /** @class */ (function () {
    function TeacherClass(firstName, lastName, fullTimeEmployee, location, yearsOfExperience, attributes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined) {
            this.yearsOfExperience = yearsOfExperience;
        }
        if (attributes) {
            for (var key in attributes) {
                this[key] = attributes[key];
            }
        }
    }
    return TeacherClass;
}());
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
