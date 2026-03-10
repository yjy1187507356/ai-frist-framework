import { Entity, TableId, TableField } from '@ai-partner-x/aiko-boot-starter-orm';
import { JsonFormat } from '@ai-partner-x/aiko-boot-starter-web';

@Entity({ tableName: 'sys_user' })
export class User {
  @TableId({ type: 'AUTO' })
  id!: number;

  @TableField({ column: 'user_name' })
  username!: string;

  @TableField()
  email!: string;

  @TableField()
  age?: number;

  /**
   * @JsonFormat - 控制 JSON 响应中日期字段的序列化格式
   * 等同于 Spring Boot Jackson @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Shanghai")
   */
  @JsonFormat({ pattern: 'yyyy-MM-dd HH:mm:ss', timezone: 'Asia/Shanghai' })
  @TableField({ column: 'created_at' })
  createdAt?: Date;

  /**
   * @JsonFormat shape: 'NUMBER' - 序列化为 Unix 时间戳（毫秒）
   * 等同于 Spring Boot Jackson @JsonFormat(shape = JsonFormat.Shape.NUMBER)
   */
  @JsonFormat({ shape: 'NUMBER' })
  @TableField({ column: 'updated_at' })
  updatedAt?: Date;
}
