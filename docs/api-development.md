# API 开发规范

本文档定义 Aiko Boot 框架中 API 层代码的开发规范，确保代码可转译为 Java Spring Boot。

> **重要**：本规范基于 `@ai-partner-x/eslint-plugin-aiko-boot` 的 `java-compat` 配置，所有规则均为 **强制要求**。

## 目录

- [ESLint 配置](#eslint-配置)
- [方法定义规范](#方法定义规范)
- [变量声明规范](#变量声明规范)
- [类型定义规范](#类型定义规范)
- [控制器规范](#控制器规范)
- [返回值规范](#返回值规范)
- [条件判断规范](#条件判断规范)
- [对象操作规范](#对象操作规范)

---

## ESLint 配置

### 安装

```bash
pnpm add -D @ai-partner-x/eslint-plugin-aiko-boot @typescript-eslint/parser
```

### 配置文件

创建 `.eslintrc.json`：

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  },
  "plugins": ["@ai-partner-x/aiko-boot"],
  "extends": ["plugin:@ai-partner-x/aiko-boot/java-compat"]
}
```

### 规则列表

| 规则 | 级别 | 说明 |
|------|------|------|
| `no-arrow-methods` | error | 禁止箭头函数作为类方法 |
| `no-destructuring-in-methods` | error | 禁止方法中使用解构 |
| `no-object-spread` | error | 禁止对象展开运算符 |
| `static-route-paths` | error | 强制路由路径为静态字符串 |
| `require-rest-controller` | error | 要求 @RestController 装饰器 |
| `no-optional-chaining-in-methods` | error | 禁止方法中使用可选链 |
| `no-nullish-coalescing` | error | 禁止空值合并运算符 |
| `explicit-return-type` | error | 强制显式返回类型 |
| `no-union-types` | error | 禁止联合类型 |
| `no-inline-object-types` | error | 禁止内联对象类型 |

---

## 方法定义规范

### 规则：no-arrow-methods

**禁止箭头函数作为类方法**

```typescript
// ❌ 错误 - 箭头函数
@Service()
class UserService {
  getUser = async (id: number) => {
    return this.userMapper.selectById(id);
  }
}

// ✅ 正确 - 标准方法
@Service()
class UserService {
  async getUser(id: number): Promise<User | null> {
    return this.userMapper.selectById(id);
  }
}
```

### 规则：explicit-return-type

**强制显式返回类型**

```typescript
// ❌ 错误 - 缺少返回类型
async getUser(id: number) {
  return this.userMapper.selectById(id);
}

// ✅ 正确 - 显式返回类型
async getUser(id: number): Promise<User | null> {
  return this.userMapper.selectById(id);
}
```

**常用返回类型**：

```typescript
// 返回单个对象（可能为空）
async getById(id: number): Promise<User | null> {}

// 返回数组
async getList(): Promise<User[]> {}

// 返回布尔值
async exists(id: number): Promise<boolean> {}

// 返回数字
async count(): Promise<number> {}

// 无返回值
async delete(id: number): Promise<void> {}
```

---

## 变量声明规范

### 规则：no-destructuring-in-methods

**禁止方法中使用解构**

```typescript
// ❌ 错误 - 解构赋值
async createUser(dto: CreateUserDto): Promise<User> {
  const { username, email, age } = dto;
  // ...
}

// ✅ 正确 - 显式属性访问
async createUser(dto: CreateUserDto): Promise<User> {
  const username = dto.username;
  const email = dto.email;
  const age = dto.age;
  // ...
}
```

### 规则：no-nullish-coalescing

**禁止空值合并运算符 `??`**

```typescript
// ❌ 错误 - 空值合并
async getPage(params: SearchParams): Promise<number> {
  const page = params.page ?? 1;
  return page;
}

// ✅ 正确 - 三元运算符
async getPage(params: SearchParams): Promise<number> {
  const page = params.page !== undefined ? params.page : 1;
  return page;
}
```

### 规则：no-optional-chaining-in-methods

**禁止方法中使用可选链 `?.`**

```typescript
// ❌ 错误 - 可选链
async getUsername(user: User | null): Promise<string | null> {
  return user?.username;
}

// ✅ 正确 - 显式 null 检查
async getUsername(user: User | null): Promise<string | null> {
  if (user !== null) {
    return user.username;
  }
  return null;
}
```

---

## 类型定义规范

### 规则：no-union-types

**禁止联合类型**

```typescript
// ❌ 错误 - 联合类型
interface SearchParams {
  orderBy: 'asc' | 'desc';
  status: 0 | 1 | 2;
}

// ✅ 正确 - 使用基础类型
interface SearchParams {
  orderBy: string;   // 可选值: 'asc', 'desc'
  status: number;    // 可选值: 0, 1, 2
}
```

### 规则：no-inline-object-types

**禁止内联对象类型**

```typescript
// ❌ 错误 - 内联对象类型
async search(): Promise<{ data: User[]; total: number }> {
  // ...
}

// ✅ 正确 - 定义独立接口
interface SearchResult {
  data: User[];
  total: number;
}

async search(): Promise<SearchResult> {
  // ...
}
```

### 类型定义最佳实践

```typescript
// dto/user.dto.ts

// 创建请求
export interface CreateUserDto {
  username: string;
  email: string;
  age: number;
}

// 更新请求
export interface UpdateUserDto {
  username?: string;
  email?: string;
  age?: number;
}

// 查询参数
export interface UserSearchParams {
  username?: string;
  email?: string;
  page?: number;
  pageSize?: number;
  orderBy?: string;      // 'asc' 或 'desc'
  orderField?: string;   // 排序字段
}

// 查询结果
export interface UserSearchResult {
  data: User[];
  total: number;
  page: number;
  pageSize: number;
}

// 通用响应
export interface SuccessResponse {
  success: boolean;
}

export interface UpdateResponse {
  success: boolean;
  updated: number;
}

export interface DeleteResponse {
  success: boolean;
  deleted: number;
}
```

---

## 控制器规范

### 规则：require-rest-controller

**要求 @RestController 装饰器**

```typescript
// ❌ 错误 - 缺少 @RestController
class UserController {
  @GetMapping('/:id')
  async getById(id: string): Promise<User | null> {}
}

// ✅ 正确 - 有 @RestController
@RestController({ path: '/api/users' })
class UserController {
  @GetMapping('/:id')
  async getById(@PathVariable('id') id: string): Promise<User | null> {}
}
```

### 规则：static-route-paths

**强制路由路径为静态字符串**

```typescript
// ❌ 错误 - 动态路径
const BASE_PATH = '/api/users';

@RestController({ path: BASE_PATH })
class UserController {}

@GetMapping(`/users/${id}`)
async getUser(): Promise<User> {}

// ✅ 正确 - 静态字符串
@RestController({ path: '/api/users' })
class UserController {
  @GetMapping('/:id')
  async getUser(@PathVariable('id') id: string): Promise<User | null> {}
}
```

### 控制器完整示例

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
import {
  CreateUserDto,
  UpdateUserDto,
  UserSearchParams,
  UserSearchResult,
  SuccessResponse,
} from '../dto/user.dto';

@RestController({ path: '/api/users' })
export class UserController {
  @Autowired()
  private userService!: UserService;

  /**
   * 获取用户列表
   */
  @GetMapping()
  async list(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  /**
   * 搜索用户
   */
  @GetMapping('/search')
  async search(
    @RequestParam('username') username?: string,
    @RequestParam('email') email?: string,
    @RequestParam('page') page?: string,
    @RequestParam('pageSize') pageSize?: string
  ): Promise<UserSearchResult> {
    const params: UserSearchParams = {
      username: username,
      email: email,
      page: page !== undefined ? Number(page) : 1,
      pageSize: pageSize !== undefined ? Number(pageSize) : 10,
    };
    
    const result = await this.userService.searchUsers(params);
    const response: UserSearchResult = {
      data: result.data,
      total: result.total,
      page: params.page !== undefined ? params.page : 1,
      pageSize: params.pageSize !== undefined ? params.pageSize : 10,
    };
    return response;
  }

  /**
   * 根据 ID 获取用户
   */
  @GetMapping('/:id')
  async getById(@PathVariable('id') id: string): Promise<User | null> {
    return this.userService.getUserById(Number(id));
  }

  /**
   * 创建用户
   */
  @PostMapping()
  async create(@RequestBody() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  /**
   * 更新用户
   */
  @PutMapping('/:id')
  async update(
    @PathVariable('id') id: string,
    @RequestBody() dto: UpdateUserDto
  ): Promise<User> {
    return this.userService.updateUser(Number(id), dto);
  }

  /**
   * 删除用户
   */
  @DeleteMapping('/:id')
  async delete(@PathVariable('id') id: string): Promise<SuccessResponse> {
    const result = await this.userService.deleteUser(Number(id));
    const response: SuccessResponse = { success: result };
    return response;
  }
}
```

---

## 返回值规范

### 规则：避免直接返回对象字面量

```typescript
// ❌ 错误 - 直接返回对象字面量
async search(): Promise<UserSearchResult> {
  return {
    data: await this.userMapper.selectList(),
    total: await this.userMapper.selectCount(),
  };
}

// ✅ 正确 - 使用变量声明后返回
async search(): Promise<UserSearchResult> {
  const data = await this.userMapper.selectList();
  const total = await this.userMapper.selectCount();
  
  const result: UserSearchResult = { data, total };
  return result;
}
```

### 简写属性规范

```typescript
// ✅ 正确 - ES6 简写属性是允许的
const data = await this.userMapper.selectList();
const total = await this.userMapper.selectCount();

const result: UserSearchResult = { data, total };  // 简写属性 OK
return result;

// ✅ 也正确 - 完整属性
const result: UserSearchResult = {
  data: data,
  total: total,
};
return result;
```

---

## 条件判断规范

### null 检查

```typescript
// ✅ 推荐 - 显式 null 比较
if (user !== null) {
  return user.username;
}
return null;

// ✅ 推荐 - 三元运算符
const username = user !== null ? user.username : null;
```

### undefined 检查

```typescript
// ✅ 推荐 - 显式 undefined 比较
const page = params.page !== undefined ? params.page : 1;

// ❌ 避免 - 空值合并
const page = params.page ?? 1;
```

### 数组检查

```typescript
// ✅ 推荐 - length 检查
if (users.length > 0) {
  return users[0];
}
return null;

// ✅ 推荐 - 使用 .get() 方法访问数组元素
const first = users.get(0);  // 转译后使用 List.get()
```

---

## 对象操作规范

### 规则：no-object-spread

**禁止对象展开运算符**

```typescript
// ❌ 错误 - 对象展开
async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
  const user = { ...dto, id };
  return this.userMapper.updateById(user);
}

// ✅ 正确 - 显式属性赋值
async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
  const user = new User();
  user.id = id;
  
  if (dto.username !== undefined) {
    user.username = dto.username;
  }
  if (dto.email !== undefined) {
    user.email = dto.email;
  }
  
  await this.userMapper.updateById(user);
  return user;
}
```

### 对象创建

```typescript
// ✅ 推荐 - new + 属性赋值
const user = new User();
user.username = dto.username;
user.email = dto.email;
user.age = dto.age;
user.createdAt = new Date();
user.updatedAt = new Date();
```

---

## 代码审查清单

在提交代码前，请确认以下检查项：

### 方法定义
- [ ] 无箭头函数作为类方法
- [ ] 所有方法有显式返回类型

### 变量声明
- [ ] 无解构赋值
- [ ] 无可选链 `?.`
- [ ] 无空值合并 `??`

### 类型定义
- [ ] 无联合类型 `'a' | 'b'`
- [ ] 无内联对象类型
- [ ] DTO 使用独立接口定义

### 控制器
- [ ] 有 `@RestController` 装饰器
- [ ] 路由路径为静态字符串
- [ ] 参数使用正确的装饰器绑定

### 返回值
- [ ] 复杂对象使用变量声明后返回
- [ ] 响应类型有对应的接口定义

### ESLint 检查
```bash
# 运行检查
pnpm lint

# 检查特定文件
npx eslint src/controller/*.ts src/service/*.ts
```

---

## 常见错误修复

### 错误 1：箭头函数方法

```typescript
// 错误代码
getUser = async (id) => this.userMapper.selectById(id);

// 修复后
async getUser(id: number): Promise<User | null> {
  return this.userMapper.selectById(id);
}
```

### 错误 2：解构赋值

```typescript
// 错误代码
const { username, email } = dto;

// 修复后
const username = dto.username;
const email = dto.email;
```

### 错误 3：空值合并

```typescript
// 错误代码
const page = params.page ?? 1;

// 修复后
const page = params.page !== undefined ? params.page : 1;
```

### 错误 4：可选链

```typescript
// 错误代码
return user?.username;

// 修复后
if (user !== null) {
  return user.username;
}
return null;
```

### 错误 5：联合类型

```typescript
// 错误代码
orderBy: 'asc' | 'desc';

// 修复后
orderBy: string;  // 可选值: 'asc', 'desc'
```

### 错误 6：内联返回对象

```typescript
// 错误代码
return { success: true };

// 修复后
const response: SuccessResponse = { success: true };
return response;
```
