package com.example.usercrud.model;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.util.List;

/**
 * 批量删除请求 DTO
 */
public class BatchDeleteDto {

    @NotNull
    @Min(0)
    private Integer minAge;

    @NotNull
    @Max(150)
    private Integer maxAge;

    public Integer getMinAge() {
        return this.minAge;
    }

    public void setMinAge(Integer minAge) {
        this.minAge = minAge;
    }

    public Integer getMaxAge() {
        return this.maxAge;
    }

    public void setMaxAge(Integer maxAge) {
        this.maxAge = maxAge;
    }

}