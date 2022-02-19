select MAX(salary) as SecondHighestSalary
from Employee
where salary not in (select MAX(salary) from Employee)
order by salary DESC
limit 1;