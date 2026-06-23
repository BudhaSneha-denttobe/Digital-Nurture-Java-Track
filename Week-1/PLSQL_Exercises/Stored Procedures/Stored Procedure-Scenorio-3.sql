CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT balance
    INTO v_balance
    FROM Accounts
    WHERE account_id = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

        UPDATE Accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer Successful. Amount = ' || p_amount
        );

    ELSE

        DBMS_OUTPUT.PUT_LINE(
            'Transfer Failed. Insufficient Balance.'
        );

    END IF;

END;
/

exec TransferFunds(103,104,20000);
select * from Accounts;