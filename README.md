# Aiko Boot

**AI 可理解的全栈开发框架**

基于 TypeScript + Next.js，采用 **MyBatis-Plus 风格 API**，让 AI 能够理解、生成、优化您的全栈应用代码，并支持一键转换为 Java Spring Boot + MyBatis-Plus 项目。

## 🎯 核心理念

- **AI Native**: 使用 AI 最熟悉的语言 (TypeScript/React/Next.js)
- **Code First**: 代码即设计，无需学习新 DSL
- **Type Safe**: TypeScript + 装饰器保证代码质量
- **Java Compatible**: TypeScript 代码可转换为 Java Spring Boot + MyBatis-Plus

## 📦 工程结构

```
aiko-boot/
├── packages/
│   ├── aiko-boot/           # 核心启动包 (DI + 自动配置) ✅
│   ├── aiko-boot-starter-web/       # Web Starter ✅
│   ├── aiko-boot-starter-orm/       # ORM Starter (MyBatis-Plus API + Kysely) ✅
│   ├── aiko-boot-starter-validation/ # Validation Starter ✅
│   ├── codegen/             # Java 代码生成器 ✅
│   ├── eslint-plugin/       # ESLint 规范插件
│   └── types/               # 类型定义
├── app/
│   ├── examples/            # 示例项目
│   │   └── user-crud/       # 用户 CRUD 示例 ✅
│   └── framework/           # 框架组件
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm build
```

### 运行示例项目

```bash
cd app/examples/user-crud/packages/api
pnpm dev
```

## 📚 核心包

### @ai-partner-x/aiko-boot-starter-orm

MyBatis-Plus 风格的 ORM，底层使用 Kysely，支持多数据库：

- **支持数据库**: PostgreSQL、SQLite、MySQL
- **BaseMapper**: 通用 CRUD 操作
- **QueryWrapper**: 条件构造器
- **装饰器**: `@TableName`, `@TableId`, `@TableField`, `@Mapper`

### @ai-partner-x/aiko-boot

依赖注入容器与自动配置：

- **装饰器**: `@Service`, `@Autowired`, `@Inject`
- **自动注入**: 支持构造函数和属性注入

### @ai-partner-x/codegen

Java 代码生成器：

- **输入**: TypeScript 装饰器代码
- **输出**: Java Spring Boot + MyBatis-Plus 代码

## 🎓 示例代码

### Entity 实体

```typescript
import { TableName, TableId, TableField } from '@ai-partner-x/aiko-boot-starter-orm';

@TableName({ tableName: 'sys_user' })
export class User {
  @TableId({ type: 'AUTO' })
  id: number;

  @TableField({ column: 'user_name' })
  username: string;

  @TableField()
  email: string;
}
```

### Mapper 数据访问层

```typescript
import { Mapper, BaseMapper } from '@ai-partner-x/aiko-boot-starter-orm';
import { User } from '../entity/user.entity';

@Mapper(User)
export class UserMapper extends BaseMapper<User> {}
```

### Service 服务层

```typescript
import { Service, Autowired } from '@ai-partner-x/aiko-boot';
import { QueryWrapper } from '@ai-partner-x/aiko-boot-starter-orm';
import { UserMapper } from '../mapper/user.mapper';

@Service()
export class UserService {
  @Autowired()
  userMapper: UserMapper;

  async findByUsername(username: string) {
    const wrapper = new QueryWrapper<User>()
      .eq('username', username);
    return this.userMapper.selectOne(wrapper);
  }

  async findActiveUsers() {
    const wrapper = new QueryWrapper<User>()
      .eq('status', 1)
      .orderByDesc('createdAt');
    return this.userMapper.selectList(wrapper);
  }
}
```

### Controller 控制器

```typescript
import { RestController, GetMapping, PostMapping, PathVariable, RequestBody } from '@ai-partner-x/aiko-boot-starter-web';

@RestController({ path: '/api/users' })
export class UserController {
  @Autowired()
  userService: UserService;

  @GetMapping('/:id')
  async getById(@PathVariable('id') id: number) {
    return this.userService.getById(id);
  }

  @PostMapping()
  async create(@RequestBody() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
```

## 🔄 Java 代码生成

TypeScript 代码可一键转换为 Java Spring Boot + MyBatis-Plus：

```typescript
// TypeScript
@TableName({ tableName: 'sys_user' })
export class User {
  @TableId({ type: 'AUTO' })
  id: number;
}
```

生成的 Java 代码：

```java
// Java
@Data
@TableName("sys_user")
public class User {
    @TableId(type = IdType.AUTO)
    private Long id;
}
```

## 🛣️ 开发路线图

- [x] 项目初始化和 monorepo 结构
- [x] @ai-partner-x/aiko-boot - 核心启动包
- [x] @ai-partner-x/aiko-boot-starter-orm - MyBatis-Plus 风格 ORM
- [x] @ai-partner-x/aiko-boot-starter-validation - 数据验证器
- [x] @ai-partner-x/aiko-boot-starter-web - Web Starter
- [x] @ai-partner-x/codegen - Java 代码生成器
- [x] user-crud 示例项目
- [ ] @ai-partner-x/eslint-plugin - ESLint 规范插件
- [ ] 更多示例项目
- [ ] 完整文档

## 📖 文档

- [架构设计](./docs/architecture.md)
- [开发路线图](./docs/roadmap-2026Q1.md)
- [Java 兼容性](./JAVA_COMPATIBILITY.md)

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

## 📄 License

MIT

---

**Build with AI, Run Anywhere** 🚀
