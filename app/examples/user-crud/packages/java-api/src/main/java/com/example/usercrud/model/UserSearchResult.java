package com.example.usercrud.model;

import com.example.usercrud.entity.User;
import java.util.List;

/**
 * 用户搜索结果
 */
public class UserSearchResult {
    private List<User> data;

    private Integer total;

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

}