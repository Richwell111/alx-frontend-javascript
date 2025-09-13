// Define Teacher interface
export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
export interface Director extends Teacher {
  numberOfReports: number;
}

// CreateEmployee function
export function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return {
      firstName: "John",
      lastName: "Doe",
      fullTimeEmployee: false,
      location: "Remote",
    };
  } else {
    return {
      firstName: "Jane",
      lastName: "Smith",
      fullTimeEmployee: true,
      location: "Onsite",
    };
  }
}
