const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
  { id: 4, name: 'Emma Williams', age: 32, department: 'Marketing', salary: 52000 },
  { id: 5, name: 'Michael Brown', age: 40, department: 'IT', salary: 70000 },
  { id: 6, name: 'Olivia Davis', age: 27, department: 'HR', salary: 48000 },
  { id: 7, name: 'James Miller', age: 45, department: 'Finance', salary: 75000 },
  { id: 8, name: 'Sophia Wilson', age: 29, department: 'Marketing', salary: 51000 },
  { id: 9, name: 'William Moore', age: 33, department: 'IT', salary: 62000 },
  { id: 10, name: 'Isabella Taylor', age: 31, department: 'HR', salary: 46000 },
  { id: 11, name: 'David Anderson', age: 38, department: 'Finance', salary: 68000 },
  { id: 12, name: 'Mia Thomas', age: 26, department: 'Marketing', salary: 49000 },
  { id: 13, name: 'Christopher Jackson', age: 41, department: 'IT', salary: 72000 },
  { id: 14, name: 'Amelia White', age: 34, department: 'HR', salary: 47000 },
  { id: 15, name: 'Daniel Harris', age: 36, department: 'Finance', salary: 64000 }
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(employee => employee.id === employeeId);
  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
  }
}
