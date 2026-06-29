package com.gvp.orm.MockitoDemo;

public interface ExternalApi2Interface {
    String getData();
    String getDataById(int id);
    String processData(String input, int times);
    boolean validateUser(String username, String password);
    String getDataByName(String name);
    String concatenate(String str1, String str2);
}