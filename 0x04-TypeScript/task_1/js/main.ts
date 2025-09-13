// Teacher interface
export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional attributes
}

// Director interface extending Teacher
export interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false,
};

const director: Director = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "New York",
  numberOfReports: 17,
};
