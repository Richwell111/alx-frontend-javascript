// String literal type Subjects
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
  return "";
}

// Test logs
console.log(teachClass("Math"));
console.log(teachClass("History"));
