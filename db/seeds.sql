INSERT INTO department(department_name)
VALUES("Engineering"), ("Sales"), ("Finance"), ("Legal"), ("Marketing");

INSERT INTO role(title, salary, department_id)
VALUES("Engineer", 85000, 1), ("Senior Engineer", 125000, 1), ("CFO", 350000, 3), ("Chief Counsel", 300000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Beena', 'Random', 1, 2), ('Natalie', 'John', 1, null), ('Steve', 'Jane', 1, 2), ('Nick', 'Wright', 2, 2), ('Luke', 'Legal', 4, null);

