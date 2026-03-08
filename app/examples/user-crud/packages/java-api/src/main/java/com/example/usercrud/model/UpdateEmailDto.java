package com.example.usercrud.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import java.util.List;

/**
 * 更新邮箱请求 DTO
 */
public class UpdateEmailDto {

    @NotNull
    @Email
    private String email;

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}