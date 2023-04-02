const addDepartment = (departmentName) => {
    return connection.promise().query(
      'INSERT INTO department (name) VALUES (?)',
      [departmentName]
    );
  };
  
  const addRole = (title, salary, departmentId) => {
    return connection.promise().query(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
      [title, salary, departmentId]
    );
  };
  
  const addEmployee = (firstName, lastName, roleId, managerId) => {
    return connection.promise().query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
      [firstName, lastName, roleId, managerId]
    );
  };

  const viewDepartments = () => {
    return connection.promise().query(
      'SELECT department.id, department.name, COUNT(role.id) AS role_count FROM department LEFT JOIN role ON department.id = role.department_id GROUP BY department.id'
    );
  };
  
  const viewRoles = () => {
    return connection.promise().query(
      'SELECT role.id, role.title, role.salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id'
    );
  };
  
  const viewEmployees = () => {
    return connection.promise().query(
      'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department_name, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id'
    );
  };
  