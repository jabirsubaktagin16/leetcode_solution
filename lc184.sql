select Department.name as Department, Employee.name as Employee, Employee.salary as Salary
from Employee join Department on Employee.departmentId=Department.id
where Employee.salary = (SELECT MAX(salary) FROM Employee WHERE departmentId = Department.id)