package com.example.usercrud.model;

import java.util.List;

/**
 * 删除操作响应 DTO
 */
public class DeleteResponse {

    private Boolean success;

    private Integer deleted;

    public Boolean getSuccess() {
        return this.success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public Integer getDeleted() {
        return this.deleted;
    }

    public void setDeleted(Integer deleted) {
        this.deleted = deleted;
    }

}