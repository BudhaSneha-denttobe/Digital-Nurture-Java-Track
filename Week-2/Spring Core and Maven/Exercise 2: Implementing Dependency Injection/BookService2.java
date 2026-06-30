package com.library.service;

import com.library.repository.BookRepository;

public class BookService2 {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("BookService2 Bean Created Successfully");
        System.out.println("Dependency Injection Successful");

        bookRepository.displayRepository();
    }
}