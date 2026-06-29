package com.gvp.orm.MockitoDemo;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MyServiceTest2 {
    
    private ExternalApi2Interface mockApi2;  // ← Use Interface
    private MyService2 service2;
    
    @BeforeEach
    void setUp() {
        // Mock the INTERFACE
        mockApi2 = mock(ExternalApi2Interface.class);
        service2 = new MyService2(mockApi2);
    }
    
    @Test
    public void testVerifyInteraction() {
        service2.fetchData();
        verify(mockApi2).getData();
    }
    
    @Test
    public void testVerifyInteractionWithArgument() {
        service2.fetchDataById(123);
        verify(mockApi2).getDataById(123);
    }
    
    @Test
    public void testVerifyInteractionWithMultipleArguments() {
        service2.processData("Hello", 5);
        verify(mockApi2).processData("Hello", 5);
    }
    
    @Test
    public void testVerifyInteractionWithAnyArgument() {
        service2.fetchDataById(999);
        verify(mockApi2).getDataById(anyInt());
    }
    
    @Test
    public void testVerifyCalledOnce() {
        service2.fetchDataById(456);
        verify(mockApi2, times(1)).getDataById(456);
    }
    
    @Test
    public void testVerifyCalledMultipleTimes() {
        service2.fetchDataById(111);
        service2.fetchDataById(111);
        service2.fetchDataById(111);
        verify(mockApi2, times(3)).getDataById(111);
    }
    
    @Test
    public void testVerifyNeverCalled() {
        verify(mockApi2, never()).getDataById(anyInt());
    }
    
    @Test
    public void testVerifyWithArgumentMatchers() {
        service2.processData("World", 10);
        verify(mockApi2).processData(eq("World"), eq(10));
    }
    
    @Test
    public void testVerifyAtLeastOnce() {
        service2.fetchDataById(789);
        service2.fetchDataById(789);
        verify(mockApi2, atLeastOnce()).getDataById(789);
    }
    
    @Test
    public void testVerifyAtMostTwice() {
        service2.fetchDataById(222);
        service2.fetchDataById(222);
        verify(mockApi2, atMost(2)).getDataById(222);
    }
    
    @Test
    public void testVerifyMultipleInteractions() {
        service2.fetchDataById(100);
        service2.processData("Test", 3);
        service2.fetchDataById(200);
        
        verify(mockApi2, times(2)).getDataById(anyInt());
        verify(mockApi2, times(1)).processData("Test", 3);
    }
    
    @Test
    public void testVerifyNoMoreInteractions() {
        service2.fetchDataById(555);
        verify(mockApi2).getDataById(555);
        verifyNoMoreInteractions(mockApi2);
    }
    
    @Test
    public void testVerifyZeroInteractions() {
        verifyNoInteractions(mockApi2);
    }
    
    @Test
    public void testStubAndVerifyWithStringArgument() {
        when(mockApi2.getDataByName("John")).thenReturn("John's Data");
        
        String result = service2.fetchDataByName("John");
        
        assertEquals("John's Data", result);
        verify(mockApi2).getDataByName("John");
    }
    
    @Test
    public void testStubAndVerifyWithMultipleStrings() {
        when(mockApi2.concatenate("Hello", "World")).thenReturn("HelloWorld");
        
        String result = service2.concatenateStrings("Hello", "World");
        
        assertEquals("HelloWorld", result);
        verify(mockApi2).concatenate("Hello", "World");
    }
}