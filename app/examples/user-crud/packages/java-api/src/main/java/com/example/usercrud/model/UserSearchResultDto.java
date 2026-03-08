package com.example.usercrud.model;

import com.example.usercrud.entity.User;
import java.util.List;

/**
 * 用户搜索结果 DTO
 */
public class UserSearchResultDto {

    private List<User> data;

    private Integer total;

    private Integer page;

    private Integer pageSize;

    public List<User> getData() {
        return this.data;
    }

    public void setData(List<User> data) {
        this.data = data;
    }

    public Integer getTotal() {
        return this.total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getPage() {
        return this.page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return this.pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

}