package com.example.usercrud;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.usercrud.mapper")
public class UsercrudApplication {
    public static void main(String[] args) {
        SpringApplication.run(UsercrudApplication.class, args);
    }
}
