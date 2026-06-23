CREATE TABLE Accounts (
    account_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(50),
    account_type VARCHAR2(20),
    balance NUMBER(10,2)
);

CREATE TABLE Employees (
    employee_id NUMBER PRIMARY KEY,
    employee_name VARCHAR2(50),
    department VARCHAR2(30),
    salary NUMBER(10,2)
);
INSERT ALL
    INTO Accounts VALUES (101,'Arjun','Savings',10000)
    INTO Accounts VALUES (102,'Meera','Savings',15000)
    INTO Accounts VALUES (103,'Vikram','Current',20000)
    INTO Accounts VALUES (104,'Kavya','Savings',12000)
SELECT * FROM dual;

COMMIT;
INSERT ALL
    INTO Employees VALUES (1,'Akhil','IT',50000)
    INTO Employees VALUES (2,'Divya','HR',40000)
    INTO Employees VALUES (3,'Rohan','IT',60000)
    INTO Employees VALUES (4,'Neha','Finance',55000)
SELECT * FROM dual;

COMMIT;
