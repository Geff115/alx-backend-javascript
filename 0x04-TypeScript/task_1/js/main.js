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
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
var result = printTeacher("John", "Doe");
console.log(result);
