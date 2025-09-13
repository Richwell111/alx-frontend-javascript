// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function + interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ---------- StudentClass Part ----------

// Interface describing the constructor
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class itself
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Richwell", "Antwi");
console.log(student.workOnHomework()); // Currently working
console.log(student.displayName());    // Richwell
