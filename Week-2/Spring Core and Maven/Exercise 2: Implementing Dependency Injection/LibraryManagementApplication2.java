package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService2;

public class LibraryManagementApplication2 {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext2.xml");

        BookService2 service =
                (BookService2) context.getBean("bookService2");

        service.displayService();
    }
}
