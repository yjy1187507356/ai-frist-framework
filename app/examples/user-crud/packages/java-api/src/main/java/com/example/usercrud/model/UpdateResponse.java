package com.example.usercrud.model;

import java.util.List;

/**
 * 更新操作响应 DTO
 */
public class UpdateResponse {

    private Boolean success;

    private Integer updated;

    public Boolean getSuccess() {
        return this.success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getUpdated() {
        return this.updated;
    }

    public void setUpdated(Integer updated) {
        this.updated = updated;
    }

}