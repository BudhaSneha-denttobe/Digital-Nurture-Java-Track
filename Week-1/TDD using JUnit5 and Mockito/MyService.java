package com.gvp.orm.MockitoDemo;

public class MyService {
    private ExternalApiInterface externalApi;  // ← Use Interface
    
    public MyService(ExternalApiInterface externalApi) {  // ← Use Interface
        this.externalApi = externalApi;
    }
    
    public String fetchData() {
        return externalApi.getData();
    }
}