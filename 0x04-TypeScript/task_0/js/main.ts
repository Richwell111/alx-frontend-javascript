// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement("table");

// Create table header
const headerRow: HTMLTableRowElement = document.createElement("tr");

const th1: HTMLTableCellElement = document.createElement("th");
th1.textContent = "First Name";

const th2: HTMLTableCellElement = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

// Populate table rows with students
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
