SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE account_type = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('1% interest applied to all savings accounts.');

END;
/

exec ProcessMonthlyInterest;

SELECT * FROM Accounts;
