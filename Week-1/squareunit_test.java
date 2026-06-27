package tests;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class squareunit_test{

    @Test
    public void testSquare() {
        UnitTesting obj = new UnitTesting();
        int output_1 = obj.square(4);
        assertEquals(16, output_1);
    }
}