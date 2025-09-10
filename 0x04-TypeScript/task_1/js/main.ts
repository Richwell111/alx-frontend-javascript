// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable during initialization
  readonly lastName: string; // only modifiable during initialization
  fullTimeEmployee: boolean; // must always be defined
  yearsOfExperience?: number; // optional
  location: string; // must always be defined

  // Allow additional arbitrary attributes
  [key: string]: any;
}

// Example usage
const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  yearsOfExperience: 5,
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "London",
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // additional attribute
};

// Print teacher3 to verify
console.log(teacher3);
