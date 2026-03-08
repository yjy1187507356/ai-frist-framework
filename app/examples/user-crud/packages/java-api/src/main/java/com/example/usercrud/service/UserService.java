package com.example.usercrud.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.example.usercrud.entity.User;
import com.example.usercrud.mapper.UserMapper;
import com.example.usercrud.model.CreateUserDto;
import com.example.usercrud.model.UpdateUserDto;
import com.example.usercrud.model.UserSearchParams;
import com.example.usercrud.model.UserSearchResult;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User getUserById(Integer id) {
        return this.userMapper.selectById(id);
    }

    public List<User> getUserList(Integer _page, Integer _pageSize) {
        return this.userMapper.selectList(null);
    }

    public List<User> getAllUsers() {
        return this.userMapper.selectList(null);
    }

    /**
     * 使用 QueryWrapper 进行高级搜索
     * @example
     * ```typescript
     * // 搜索年龄在 20-30 之间，用户名包含 "test" 的用户
     * await userService.searchUsers({
     * username: 'test',
     * minAge: 20,
     * maxAge: 30,
     * orderBy: 'createdAt',
     * orderDir: 'desc'
     * });
     * ```
     */
    public UserSearchResult searchUsers(UserSearchParams params) {
        final var username = params.getUsername();
        final var email = params.getEmail();
        final var minAge = params.getMinAge();
        final var maxAge = params.getMaxAge();
        final var page = params.getPage() != null ? params.getPage() : 1;
        final var pageSize = params.getPageSize() != null ? params.getPageSize() : 10;
        final var orderBy = params.getOrderBy() != null ? params.getOrderBy() : "id";
        final var orderDir = params.getOrderDir() != null ? params.getOrderDir() : "desc";
        final QueryWrapper<User> wrapper = new QueryWrapper<User>();
        if (username != null) {
            wrapper.like("username", username);
        }
        if (email != null) {
            wrapper.like("email", email);
        }
        if (minAge != null && maxAge != null) {
            wrapper.between("age", minAge, maxAge);
        } else {
            if (minAge != null) {
                wrapper.ge("age", minAge);
            } else {
                if (maxAge != null) {
                    wrapper.le("age", maxAge);
                }
            }
        }
        if (Objects.equals(orderDir, "asc")) {
            wrapper.orderByAsc(orderBy);
        } else {
            wrapper.orderByDesc(orderBy);
        }
        final var data = this.userMapper.selectList(wrapper);
        final QueryWrapper<User> countWrapper = new QueryWrapper<User>();
        if (username != null) {
            countWrapper.like("username", username);
        }
        if (email != null) {
            countWrapper.like("email", email);
        }
        if (minAge != null && maxAge != null) {
            countWrapper.between("age", minAge, maxAge);
        } else {
            if (minAge != null) {
                countWrapper.ge("age", minAge);
            } else {
                if (maxAge != null) {
                    countWrapper.le("age", maxAge);
                }
            }
        }
        final var total = this.userMapper.selectCount(countWrapper);
        final UserSearchResult result = new UserSearchResult();
        return result;
    }

    /**
     * 使用 QueryWrapper 查询活跃用户（示例：年龄 > 18 且邮箱不为空）
     */
    public List<User> getActiveUsers() {
        final var wrapper = new QueryWrapper<User>().gt("age", 18).isNotNull("email").orderByDesc("createdAt");
        return this.userMapper.selectList(wrapper);
    }

    /**
     * 使用 OR 条件查询（示例：用户名或邮箱包含关键字）
     */
    public List<User> searchByKeyword(String keyword) {
        final var wrapper = new QueryWrapper<User>().or((w) -> w.like("username", keyword).like("email", keyword)).orderByDesc("id");
        return this.userMapper.selectList(wrapper);
    }

    @Transactional
    public User createUser(CreateUserDto dto) {
        final var existingWrapper = new QueryWrapper<User>().eq("username", dto.getUsername());
        final var existingList = this.userMapper.selectList(existingWrapper);
        if (existingList.size() > 0) {
            throw new RuntimeException("用户名已存在");
        }
        final User user = new User();
        user.setId(0L);
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setAge(dto.getAge());
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        this.userMapper.insert(user);
        final var newUserWrapper = new QueryWrapper<User>().eq("username", dto.getUsername());
        final var newUserList = this.userMapper.selectList(newUserWrapper);
        return newUserList.get(0);
    }

    @Transactional
    public User updateUser(Integer id, UpdateUserDto dto) {
        final var user = this.userMapper.selectById(id);
        if (user == null) {
            throw new RuntimeException("用户不存在");
        }
        if (dto.getUsername() != null) {
            user.setUsername(dto.getUsername());
        }
        if (dto.getEmail() != null) {
            user.setEmail(dto.getEmail());
        }
        if (dto.getAge() != null) {
            user.setAge(dto.getAge());
        }
        user.setUpdatedAt(LocalDateTime.now());
        this.userMapper.updateById(user);
        return this.userMapper.selectById(id);
    }

    @Transactional
    public Boolean deleteUser(Integer id) {
        final var user = this.userMapper.selectById(id);
        if (user == null) {
            throw new RuntimeException("用户不存在");
        }
        final var affected = this.userMapper.deleteById(id);
        return affected > 0;
    }

    /**
     * 使用 UpdateWrapper 批量更新用户年龄
     * @example
     * ```typescript
     * // 将所有 username 包含 'test' 的用户年龄设置为 25
     * await userService.batchUpdateAge('test', 25);
     * ```
     */
    @Transactional
    public Integer batchUpdateAge(String usernameKeyword, Integer newAge) {
        final var wrapper = new UpdateWrapper<User>().set("age", newAge).set("updatedAt", LocalDateTime.now()).like("username", usernameKeyword);
        return this.userMapper.update(wrapper);
    }

    /**
     * 使用 UpdateWrapper 根据条件更新邮箱
     * @example
     * ```typescript
     * // 将 ID 为 1 的用户邮箱更新为 new@test.com
     * await userService.updateEmailById(1, 'new@test.com');
     * ```
     */
    @Transactional
    public Integer updateEmailById(Integer id, String newEmail) {
        final var wrapper = new UpdateWrapper<User>().set("email", newEmail).set("updatedAt", LocalDateTime.now()).eq("id", id);
        return this.userMapper.update(wrapper);
    }

    /**
     * 使用 QueryWrapper 批量删除（示例：删除指定年龄范围的用户）
     */
    @Transactional
    public Integer batchDeleteByAgeRange(Integer minAge, Integer maxAge) {
        final var wrapper = new QueryWrapper<User>().between("age", minAge, maxAge);
        return this.userMapper.delete(wrapper);
    }

}