package com.example.usercrud.model;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.util.List;

/**
 * 批量更新年龄请求 DTO
 */
public class BatchUpdateAgeDto {

    @NotNull
    private String username;

    @NotNull
    @Min(0)
    @Max(150)
    private Integer age;

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getAge() {
        return this.age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

}