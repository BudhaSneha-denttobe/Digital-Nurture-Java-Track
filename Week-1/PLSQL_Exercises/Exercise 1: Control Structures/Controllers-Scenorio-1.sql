DECLARE
    CURSOR c_customers IS
        SELECT c.customer_id,
               c.customer_name,
               c.age,
               l.interest_rate
        FROM Customers c
        JOIN Loans l
        ON c.customer_id = l.customer_id;

BEGIN
    FOR cust IN c_customers LOOP

        IF cust.age > 60 THEN

            UPDATE Loans
            SET interest_rate = interest_rate - 1
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE(
                'Discount Applied -> Customer ID: '
                || cust.customer_id
                || ', Name: '
                || cust.customer_name
                || ', Age: '
                || cust.age
            );

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rate discount applied successfully.');

END;
/