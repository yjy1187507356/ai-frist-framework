/**
 * User Controller - Spring Boot 风格
 */
import 'reflect-metadata';
import {
  RestController,
  GetMapping,
  PostMapping,
  PutMapping,
  DeleteMapping,
  PathVariable,
  RequestBody,
  RequestParam,
  RequestPart,
  ModelAttribute,
  RequestAttribute,
  type MultipartFile,
} from '@ai-partner-x/aiko-boot-starter-web';
import { Autowired } from '@ai-partner-x/aiko-boot';
import { User } from '../entity/user.entity.js';
import { UserService, UserSearchParams } from '../service/user.service.js';
import { 
  CreateUserDto, 
  UpdateUserDto,
  BatchUpdateAgeDto,
  UpdateEmailDto,
  BatchDeleteDto,
  SuccessResponse,
  UpdateResponse,
  DeleteResponse,
  UserSearchResultDto,
  UserFilterDto,
} from '../dto/user.dto.js';

@RestController({ path: '/users' })
export class UserController {
  @Autowired()
  private userService!: UserService;

  @GetMapping()
  async list(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  /**
   * 高级搜索 - 使用 QueryWrapper
   * 
   * @example
   * GET /api/users/search?username=test&minAge=20&maxAge=30&page=1&pageSize=10
   */
  @GetMapping('/search')
  async search(
    @RequestParam('username') username?: string,
    @RequestParam('email') email?: string,
    @RequestParam('minAge') minAge?: string,
    @RequestParam('maxAge') maxAge?: string,
    @RequestParam('page') page?: string,
    @RequestParam('pageSize') pageSize?: string,
    @RequestParam('orderBy') orderBy?: string,
    @RequestParam('orderDir') orderDir?: string,
  ): Promise<UserSearchResultDto> {
    const params: UserSearchParams = {
      username,
      email,
      minAge: minAge ? Number(minAge) : undefined,
      maxAge: maxAge ? Number(maxAge) : undefined,
      page: page ? Number(page) : 1,
      pageSize: pageSize ? Number(pageSize) : 10,
      orderBy: orderBy as UserSearchParams['orderBy'],
      orderDir: orderDir as UserSearchParams['orderDir'],
    };
    
    const result = await this.userService.searchUsers(params);
    const response: UserSearchResultDto = {
      data: result.data,
      total: result.total,
      page: params.page!,
      pageSize: params.pageSize!,
    };
    return response;
  }

  /**
   * 活跃用户查询 - QueryWrapper 示例
   */
  @GetMapping('/active')
  async getActiveUsers(): Promise<User[]> {
    return this.userService.getActiveUsers();
  }

  /**
   * 关键字搜索 - OR 条件 QueryWrapper 示例
   */
  @GetMapping('/keyword/:keyword')
  async searchByKeyword(@PathVariable('keyword') keyword: string): Promise<User[]> {
    return this.userService.searchByKeyword(keyword);
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

  // ==================== UpdateWrapper 示例端点 ====================

  /**
   * 批量更新年龄 - UpdateWrapper 示例
   * 
   * @example
   * PUT /api/users/batch/age
   * Body: { "username": "test", "age": 30 }
   */
  @PutMapping('/batch/age')
  async batchUpdateAge(
    @RequestBody() body: BatchUpdateAgeDto,
  ): Promise<UpdateResponse> {
    const updated = await this.userService.batchUpdateAge(body.username, body.age);
    const response: UpdateResponse = { success: true, updated };
    return response;
  }

  /**
   * 更新用户邮箱 - UpdateWrapper 示例
   * 
   * @example
   * PUT /api/users/1/email
   * Body: { "email": "new@test.com" }
   */
  @PutMapping('/:id/email')
  async updateEmail(
    @PathVariable('id') id: string,
    @RequestBody() body: UpdateEmailDto,
  ): Promise<UpdateResponse> {
    const updated = await this.userService.updateEmailById(Number(id), body.email);
    const response: UpdateResponse = { success: true, updated };
    return response;
  }

  /**
   * 批量删除 - QueryWrapper 示例
   * 
   * @example
   * DELETE /api/users/batch
   * Body: { "minAge": 18, "maxAge": 25 }
   */
  @DeleteMapping('/batch')
  async batchDelete(
    @RequestBody() body: BatchDeleteDto,
  ): Promise<DeleteResponse> {
    const deleted = await this.userService.batchDeleteByAgeRange(body.minAge, body.maxAge);
    const response: DeleteResponse = { success: true, deleted };
    return response;
  }

  // ==================== @ModelAttribute 示例端点 ====================

  /**
   * 使用 @ModelAttribute 绑定过滤参数 - 自动合并 URL query string 和 form body
   *
   * 等同于 Spring Boot: @GetMapping + @ModelAttribute SearchDto
   * 调用方无需逐一声明 @RequestParam，整个查询对象自动从请求参数绑定。
   *
   * @example
   * GET /api/users/filter?username=alice&minAge=18&maxAge=30&page=1&pageSize=5
   */
  @GetMapping('/filter')
  async filter(
    @ModelAttribute() query: UserFilterDto,
  ): Promise<UserSearchResultDto> {
    const params: UserSearchParams = {
      username: query.username,
      email: query.email,
      minAge: query.minAge ? Number(query.minAge) : undefined,
      maxAge: query.maxAge ? Number(query.maxAge) : undefined,
      page: query.page ? Number(query.page) : 1,
      pageSize: query.pageSize ? Number(query.pageSize) : 10,
      orderBy: query.orderBy as UserSearchParams['orderBy'],
      orderDir: query.orderDir as UserSearchParams['orderDir'],
    };

    const result = await this.userService.searchUsers(params);
    const response: UserSearchResultDto = {
      data: result.data,
      total: result.total,
      page: params.page!,
      pageSize: params.pageSize!,
    };
    return response;
  }

  // ==================== @RequestAttribute 示例端点 ====================

  /**
   * 使用 @RequestAttribute 读取中间件注入的当前用户信息
   *
   * 等同于 Spring Boot: @RequestAttribute("currentUser")
   * Express 中间件通过 `(req as any).currentUser = { id, username }` 将属性挂载到请求对象。
   * @RequestAttribute 装饰器自动从 req 对象中读取对应属性。
   *
   * @example
   * // 中间件设置: app.use((req, res, next) => { (req as any).currentUser = { id: 1, username: 'admin' }; next(); })
   * GET /api/users/profile
   */
  @GetMapping('/profile')
  async profile(
    @RequestAttribute('currentUser') currentUser: { id: number; username: string } | undefined,
  ): Promise<User | null> {
    if (!currentUser) {
      throw new Error('未登录或缺少 currentUser 请求属性');
    }
    return this.userService.getUserById(currentUser.id);
  }

  // ==================== @RequestPart 文件上传示例端点 ====================

  /**
   * 使用 @RequestPart 上传用户头像 - multipart/form-data 文件上传
   *
   * 等同于 Spring Boot: @PostMapping + @RequestPart("avatar") MultipartFile
   * 框架自动为含 @RequestPart 参数的路由注入 multer 中间件，无需手动配置。
   *
   * @example
   * POST /api/users/1/avatar  (Content-Type: multipart/form-data)
   * Form field name: "avatar"
   */
  @PostMapping('/:id/avatar')
  async uploadAvatar(
    @PathVariable('id') id: string,
    @RequestPart('avatar') avatar: MultipartFile,
  ): Promise<{ filename: string; size: number; contentType: string | null }> {
    if (avatar.isEmpty()) {
      throw new Error('上传的文件为空');
    }

    // 触发异步审计日志（@Async fire-and-forget，不阻塞响应）
    this.userService.recordAuditLog('UPLOAD_AVATAR', Number(id));

    return {
      filename: avatar.getOriginalFilename(),
      size: avatar.getSize(),
      contentType: avatar.getContentType(),
    };
  }
}
