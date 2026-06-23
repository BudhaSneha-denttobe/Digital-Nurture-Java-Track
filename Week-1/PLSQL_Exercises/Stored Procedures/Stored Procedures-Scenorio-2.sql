CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
IS
BEGIN

    UPDATE Employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        p_bonus_percent || '% bonus added to ' ||
        p_department || ' department.'
    );

END;
/

exec UpdateEmployeeBonus('HR',10);

SELECT * FROM Employees;