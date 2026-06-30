package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.repository.BookRepository;
import com.library.service.BookService;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookRepository repository =
                (BookRepository) context.getBean("bookRepository");

        BookService service =
                (BookService) context.getBean("bookService");

        repository.displayRepository();
        service.displayService();
    }
}
