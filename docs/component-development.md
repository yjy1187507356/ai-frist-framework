# 组件开发规范

本文档定义 Aiko Boot 框架中各类组件的开发规范，确保代码质量和可维护性。

## 目录

- [通用规范](#通用规范)
- [Entity 实体规范](#entity-实体规范)
- [Mapper 数据访问层规范](#mapper-数据访问层规范)
- [Service 服务层规范](#service-服务层规范)
- [Controller 控制器规范](#controller-控制器规范)
- [DTO 数据传输对象规范](#dto-数据传输对象规范)

---

## 通用规范

### 文件命名

| 组件类型 | 文件命名 | 示例 |
|----------|----------|------|
| Entity | `{name}.entity.ts` | `user.entity.ts` |
| Mapper | `{name}.mapper.ts` | `user.mapper.ts` |
| Service | `{name}.service.ts` | `user.service.ts` |
| Controller | `{name}.controller.ts` | `user.controller.ts` |
| DTO | `{name}.dto.ts` | `user.dto.ts` |

### 目录结构

```
src/
├── entity/           # 实体类
│   └── user.entity.ts
├── mapper/           # 数据访问层
│   └── user.mapper.ts
├── service/          # 服务层
│   └── user.service.ts
├── controller/       # 控制器层
│   └── user.controller.ts
├── dto/              # 数据传输对象
│   └── user.dto.ts
└── server.ts         # 启动入口
```

### 类命名

- 使用 PascalCase
- 后缀与组件类型一致

```typescript
// ✅ 正确
export class User {}
export class UserMapper extends BaseMapper<User> {}
export class UserService {}
export class UserController {}
export class CreateUserDto {}

// ❌ 错误
export class user {}           // 首字母小写
export class UserSvc {}        // 缩写
export class userController {} // 首字母小写
```

---

## Entity 实体规范

### 基本结构

```typescript
import { Entity, TableId, TableField } from '@ai-partner-x/aiko-boot-starter-orm';

@Entity({ tableName: 'sys_user' })
export class User {
  @TableId({ type: 'AUTO' })
  id!: number;

  @TableField({ column: 'user_name' })
  username!: string;

  @TableField()
  email!: string;

  @TableField()
  age!: number;

  @TableField({ column: 'created_at' })
  createdAt!: Date;

  @TableField({ column: 'updated_at' })
  updatedAt!: Date;
}
```

### 装饰器说明

| 装饰器 | 用途 | 必需参数 |
|--------|------|----------|
| `@Entity` | 标记实体类 | `tableName` |
| `@TableId` | 标记主键 | `type` (AUTO/INPUT/ASSIGN_ID) |
| `@TableField` | 标记字段 | `column` (可选，默认驼峰转下划线) |

### 字段类型映射

| TypeScript | Java | SQL |
|------------|------|-----|
| `number` (id) | `Long` | `BIGINT` |
| `number` | `Integer` | `INT` |
| `string` | `String` | `VARCHAR` |
| `boolean` | `Boolean` | `BOOLEAN` |
| `Date` | `LocalDateTime` | `TIMESTAMP` |

### 注意事项

1. **所有字段必须有类型声明**
2. **使用 `!` 断言非空**，避免 `undefined`
3. **主键字段使用 `@TableId`**，非主键使用 `@TableField`
4. **避免使用联合类型**，如 `string | null`

---

## Mapper 数据访问层规范

### 基本结构

```typescript
import { Mapper, BaseMapper } from '@ai-partner-x/aiko-boot-starter-orm';
import { User } from '../entity/user.entity';

@Mapper(User)
export class UserMapper extends BaseMapper<User> {
  // 自定义查询方法（可选）
}
```

### 继承 BaseMapper

所有 Mapper 必须继承 `BaseMapper<T>`，自动获得以下方法：

| 方法 | 说明 | 返回类型 |
|------|------|----------|
| `selectById(id)` | 根据 ID 查询 | `T \| null` |
| `selectList(wrapper?)` | 条件查询列表 | `T[]` |
| `selectOne(wrapper)` | 条件查询单个 | `T \| null` |
| `selectCount(wrapper?)` | 条件统计 | `number` |
| `insert(entity)` | 插入 | `number` (影响行数) |
| `updateById(entity)` | 根据 ID 更新 | `number` |
| `deleteById(id)` | 根据 ID 删除 | `number` |
| `update(wrapper)` | 条件更新 | `number` |
| `delete(wrapper)` | 条件删除 | `number` |

### 装饰器参数

`@Mapper` 装饰器必须传入实体类：

```typescript
// ✅ 正确
@Mapper(User)
export class UserMapper extends BaseMapper<User> {}

// ❌ 错误 - 缺少实体类参数
@Mapper()
export class UserMapper extends BaseMapper<User> {}
```

---

## Service 服务层规范

### 基本结构

```typescript
import { Service, Autowired, Transactional } from '@ai-partner-x/aiko-boot';
import { QueryWrapper } from '@ai-partner-x/aiko-boot-starter-orm';
import { UserMapper } from '../mapper/user.mapper';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@Service()
export class UserService {
  @Autowired()
  private userMapper!: UserMapper;

  async getUserById(id: number): Promise<User | null> {
    return this.userMapper.selectById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userMapper.selectList();
  }

  @Transactional()
  async createUser(dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = dto.username;
    user.email = dto.email;
    user.age = dto.age;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    
    await this.userMapper.insert(user);
    return user;
  }
}
```

### 依赖注入

使用 `@Autowired()` 注入依赖：

```typescript
@Service()
export class UserService {
  @Autowired()
  private userMapper!: UserMapper;

  @Autowired()
  private cacheService!: CacheService;
}
```

### 事务管理

使用 `@Transactional()` 装饰器标记需要事务的方法：

```typescript
@Transactional()
async createUser(dto: CreateUserDto): Promise<User> {
  // 事务内的操作
}
```

### QueryWrapper 使用

```typescript
async searchUsers(params: SearchParams): Promise<User[]> {
  const wrapper = new QueryWrapper<User>();
  
  // 等于
  if (params.username !== undefined) {
    wrapper.eq('username', params.username);
  }
  
  // 模糊查询
  if (params.keyword !== undefined) {
    wrapper.like('username', params.keyword);
  }
  
  // 范围查询
  if (params.minAge !== undefined && params.maxAge !== undefined) {
    wrapper.between('age', params.minAge, params.maxAge);
  }
  
  // 排序
  wrapper.orderByDesc('createdAt');
  
  // 分页
  wrapper.page(params.page, params.pageSize);
  
  return this.userMapper.selectList(wrapper);
}
```

---

## Controller 控制器规范

### 基本结构

```typescript
import {
  RestController,
  GetMapping,
  PostMapping,
  PutMapping,
  DeleteMapping,
  PathVariable,
  RequestParam,
  RequestBody,
} from '@ai-partner-x/aiko-boot-starter-web';
import { Autowired } from '@ai-partner-x/aiko-boot';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

@RestController({ path: '/api/users' })
export class UserController {
  @Autowired()
  private userService!: UserService;

  @GetMapping()
  async list(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @GetMapping('/:id')
  async getById(@PathVariable('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  @PostMapping()
  async create(@RequestBody() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  @PutMapping('/:id')
  async update(
    @PathVariable('id') id: string,
    @RequestBody() dto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(Number(id), dto);
  }

  @DeleteMapping('/:id')
  async delete(@PathVariable('id') id: string): Promise<SuccessResponse> {
    const result = await this.userService.deleteUser(Number(id));
    const response: SuccessResponse = { success: result };
    return response;
  }
}
```

### 路由装饰器

| 装饰器 | HTTP 方法 | 示例 |
|--------|-----------|------|
| `@GetMapping` | GET | `@GetMapping('/:id')` |
| `@PostMapping` | POST | `@PostMapping()` |
| `@PutMapping` | PUT | `@PutMapping('/:id')` |
| `@DeleteMapping` | DELETE | `@DeleteMapping('/:id')` |

### 参数绑定

| 装饰器 | 用途 | 示例 |
|--------|------|------|
| `@PathVariable` | 路径参数 | `@PathVariable('id') id: string` |
| `@RequestParam` | 查询参数 | `@RequestParam('page') page?: string` |
| `@RequestBody` | 请求体 | `@RequestBody() dto: CreateUserDto` |

---

## DTO 数据传输对象规范

### 基本结构

```typescript
// user.dto.ts

export interface CreateUserDto {
  username: string;
  email: string;
  age: number;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  age?: number;
}

export interface UserSearchParams {
  username?: string;
  email?: string;
  minAge?: number;
  maxAge?: number;
  page?: number;
  pageSize?: number;
}

export interface UserSearchResult {
  data: User[];
  total: number;
}

export interface SuccessResponse {
  success: boolean;
}
```

### 命名规范

| 用途 | 命名模式 | 示例 |
|------|----------|------|
| 创建请求 | `Create{Entity}Dto` | `CreateUserDto` |
| 更新请求 | `Update{Entity}Dto` | `UpdateUserDto` |
| 查询参数 | `{Entity}SearchParams` | `UserSearchParams` |
| 查询结果 | `{Entity}SearchResult` | `UserSearchResult` |
| 通用响应 | `{Action}Response` | `SuccessResponse` |

### 注意事项

1. **使用 interface 定义 DTO**，不使用 class
2. **可选字段使用 `?`**，不使用 `| undefined`
3. **避免嵌套对象类型内联定义**，应独立定义接口
4. **避免联合类型**，如 `'asc' | 'desc'`，应使用 `string`

---

## 代码审查清单

- [ ] 文件命名符合规范
- [ ] 类命名使用 PascalCase
- [ ] Entity 字段都有类型声明和装饰器
- [ ] Mapper 继承 BaseMapper 并传入实体类
- [ ] Service 使用 @Autowired 注入依赖
- [ ] Controller 使用 @RestController 装饰器
- [ ] DTO 使用 interface 定义
- [ ] 方法有显式返回类型
- [ ] 无箭头函数作为类方法
- [ ] 无解构赋值
- [ ] 无可选链和空值合并运算符
