package com.gvp.orm.MockitoDemo;


import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest {
    
    @Test
    public void testExternalApi() {
        // Mock the INTERFACE instead of the class
        ExternalApiInterface mockApi = mock(ExternalApiInterface.class);
        
        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");
        
        // Test
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        
        // Verify
        assertEquals("Mock Data", result);
        verify(mockApi).getData();
    }
}