interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;  // For additional properties dynamically
}

class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number, attributes?: { 
  [key: string]: any }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
    if (attributes) {
      for (const key in attributes) {
        (this as any)[key] = attributes[key];
      }
    }
  }
}



const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);