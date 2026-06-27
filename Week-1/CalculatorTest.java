package tests;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    Calculator cal;

    @Before
    public void setUp() {
        System.out.println("Setup Method Executed");
        cal = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Method Executed");
        cal = null;
    }

    @Test
    public void testAdd() {

        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = cal.add(a, b);

        // Assert
        assertEquals(8, result);
    }
}