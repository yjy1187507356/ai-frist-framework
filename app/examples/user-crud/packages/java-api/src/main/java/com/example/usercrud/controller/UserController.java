package com.example.usercrud.controller;

import com.example.usercrud.entity.User;
import com.example.usercrud.model.*;
import com.example.usercrud.service.UserService;
import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> list() {
        return this.userService.getAllUsers();
    }

    /**
     * 高级搜索 - 使用 QueryWrapper
     * @example
     * GET /api/users/search?username=test&minAge=20&maxAge=30&page=1&pageSize=10
     */
    @GetMapping("/search")
    public UserSearchResultDto search(@RequestParam("username") String username, @RequestParam("email") String email, @RequestParam("minAge") String minAge, @RequestParam("maxAge") String maxAge, @RequestParam("page") String page, @RequestParam("pageSize") String pageSize, @RequestParam("orderBy") String orderBy, @RequestParam("orderDir") String orderDir) {
        final UserSearchParams params = new UserSearchParams();
        params.setMinAge(minAge != null ? Integer.valueOf(minAge) : null);
        params.setMaxAge(maxAge != null ? Integer.valueOf(maxAge) : null);
        params.setPage(page != null ? Integer.valueOf(page) : 1);
        params.setPageSize(pageSize != null ? Integer.valueOf(pageSize) : 10);
        params.setOrderBy(orderBy);
        params.setOrderDir(orderDir);
        final var result = this.userService.searchUsers(params);
        final UserSearchResultDto response = new UserSearchResultDto();
        response.setData(result.getData());
        response.setTotal(result.getTotal());
        response.setPage(params.getPage());
        response.setPageSize(params.getPageSize());
        return response;
    }

    /**
     * 活跃用户查询 - QueryWrapper 示例
     */
    @GetMapping("/active")
    public List<User> getActiveUsers() {
        return this.userService.getActiveUsers();
    }

    /**
     * 关键字搜索 - OR 条件 QueryWrapper 示例
     */
    @GetMapping("/keyword/{keyword}")
    public List<User> searchByKeyword(@PathVariable("keyword") String keyword) {
        return this.userService.searchByKeyword(keyword);
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable("id") String id) {
        return this.userService.getUserById(Integer.valueOf(id));
    }

    @PostMapping
    public User create(@Valid @RequestBody CreateUserDto dto) {
        return this.userService.createUser(dto);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable("id") String id, @Valid @RequestBody UpdateUserDto dto) {
        return this.userService.updateUser(Integer.valueOf(id), dto);
    }

    @DeleteMapping("/{id}")
    public SuccessResponse delete(@PathVariable("id") String id) {
        final var result = this.userService.deleteUser(Integer.valueOf(id));
        final SuccessResponse response = new SuccessResponse();
        response.setSuccess(result);
        return response;
    }

    /**
     * 批量更新年龄 - UpdateWrapper 示例
     * @example
     * PUT /api/users/batch/age
     * Body: { "username": "test", "age": 30 }
     */
    @PutMapping("/batch/age")
    public UpdateResponse batchUpdateAge(@Valid @RequestBody BatchUpdateAgeDto body) {
        final var updated = this.userService.batchUpdateAge(body.getUsername(), body.getAge());
        final UpdateResponse response = new UpdateResponse();
        response.setSuccess(true);
        return response;
    }

    /**
     * 更新用户邮箱 - UpdateWrapper 示例
     * @example
     * PUT /api/users/1/email
     * Body: { "email": "new@test.com" }
     */
    @PutMapping("/{id}/email")
    public UpdateResponse updateEmail(@PathVariable("id") String id, @Valid @RequestBody UpdateEmailDto body) {
        final var updated = this.userService.updateEmailById(Integer.valueOf(id), body.getEmail());
        final UpdateResponse response = new UpdateResponse();
        response.setSuccess(true);
        return response;
    }

    /**
     * 批量删除 - QueryWrapper 示例
     * @example
     * DELETE /api/users/batch
     * Body: { "minAge": 18, "maxAge": 25 }
     */
    @DeleteMapping("/batch")
    public DeleteResponse batchDelete(@Valid @RequestBody BatchDeleteDto body) {
        final var deleted = this.userService.batchDeleteByAgeRange(body.getMinAge(), body.getMaxAge());
        final DeleteResponse response = new DeleteResponse();
        response.setSuccess(true);
        return response;
    }

}