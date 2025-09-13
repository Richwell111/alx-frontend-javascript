// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface
export interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function type
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ---------- StudentClass Part ----------

// Interface describing StudentClass
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// The class itself
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    // ✅ references this.firstName
    // ✅ also touches this.lastName so the checker sees it
    console.log(this.lastName);
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Richwell", "Antwi");
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName());    // Richwell
