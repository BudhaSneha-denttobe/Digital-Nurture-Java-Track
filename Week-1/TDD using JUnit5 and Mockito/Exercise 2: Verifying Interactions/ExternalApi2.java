package com.gvp.orm.MockitoDemo;

public class ExternalApi2 implements ExternalApi2Interface {
    
    @Override
    public String getData() {
        return "Real API Data from ExternalApi2";
    }
    
    @Override
    public String getDataById(int id) {
        return "Data for ID: " + id;
    }
    
    @Override
    public String processData(String input, int times) {
        return "Processed: " + input + " " + times + " times";
    }
    
    @Override
    public boolean validateUser(String username, String password) {
        return "admin".equals(username) && "admin123".equals(password);
    }
    
    @Override
    public String getDataByName(String name) {
        return "Data for: " + name;
    }
    
    @Override
    public String concatenate(String str1, String str2) {
        return str1 + str2;
    }
}
