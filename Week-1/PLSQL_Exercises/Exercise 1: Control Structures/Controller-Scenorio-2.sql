DECLARE
    CURSOR c_customers IS
        SELECT customer_id,
               customer_name,
               balance
        FROM Customers;

BEGIN
    FOR cust IN c_customers LOOP

        IF cust.balance > 10000 THEN

            UPDATE Customers
            SET isVIP = 'TRUE'
            WHERE customer_id = cust.customer_id;

            DBMS_OUTPUT.PUT_LINE(
                'VIP Status Granted -> Customer ID: '
                || cust.customer_id
                || ', Name: '
                || cust.customer_name
                || ', Balance: '
                || cust.balance
            );

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');

END;
/