package com.gvp.orm.MockitoDemo;
public class ExternalApi implements ExternalApiInterface {
    @Override
    public String getData() {
        return "Real API Data";
    }
}
