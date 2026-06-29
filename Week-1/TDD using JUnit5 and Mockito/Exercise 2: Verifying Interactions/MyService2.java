package com.gvp.orm.MockitoDemo;

public class MyService2 {
    private ExternalApi2Interface externalApi2;  // ← Use Interface
    
    public MyService2(ExternalApi2Interface externalApi2) {  // ← Use Interface
        this.externalApi2 = externalApi2;
    }
    
    public String fetchData() {
        return externalApi2.getData();
    }
    
    public String fetchDataById(int id) {
        return externalApi2.getDataById(id);
    }
    
    public String processData(String input, int times) {
        return externalApi2.processData(input, times);
    }
    
    public boolean loginUser(String username, String password) {
        return externalApi2.validateUser(username, password);
    }
    
    public String fetchDataByName(String name) {
        return externalApi2.getDataByName(name);
    }
    
    public String concatenateStrings(String str1, String str2) {
        return externalApi2.concatenate(str1, str2);
    }
}