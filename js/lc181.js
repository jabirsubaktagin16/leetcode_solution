select name Employee from Employee a where salary> (
select salary from Employee b where b.id=a.managerId)