/**
 * @Slf4j 类装饰器
 * 自动为类注入日志记录器，类似 Lombok @Slf4j 注解
 */

import { ILogger, LoggerFactoryOptions } from '../types';
import { getLogger } from '../core/facade';
import { LoggerMetadata } from '../metadata/metadata';

/** @Slf4j 装饰器选项 */
export interface Slf4jOptions {
  /** 日志记录器名称（默认使用类名） */
  name?: string;
  /** 日志级别 */
  level?: string;
  /** 是否启用装饰器 */
  enabled?: boolean;
  /** 自定义日志工厂选项 */
  factoryOptions?: Partial<LoggerFactoryOptions>;
}

/**
 * @Slf4j 类装饰器工厂函数
 */
export function Slf4j(options?: Slf4jOptions): ClassDecorator {
  return function (target: any) {
    const className = target?.name || '';
    const loggerName = options?.name || className;
    const isEnabled = options?.enabled !== false;

    if (!isEnabled) {
      return target; // 返回原始目标，而不是 undefined
    }

    // 存储元数据
    LoggerMetadata.setName(target, loggerName);
    LoggerMetadata.setOptions(target, options);

    // 创建日志记录器实例
    const logger = getLogger(loggerName, options?.factoryOptions as any);
    LoggerMetadata.setLogger(target, logger);

    // 向类原型添加 logger 属性
    Object.defineProperty(target.prototype, 'logger', {
      get() {
        return LoggerMetadata.getLogger(target);
      },
      enumerable: false,
      configurable: true,
    });

    // 向类静态属性添加 logger 属性
    Object.defineProperty(target, 'logger', {
      get() {
        return LoggerMetadata.getLogger(target);
      },
      enumerable: false,
      configurable: true,
    });

    // 可选：为类添加便捷的日志方法
    if (options?.level) {
      const level = options.level.toLowerCase();
      Object.defineProperty(target.prototype, 'log', {
        value(message: string, meta?: any) {
          const logger = this.logger;
          if (logger && logger[level]) {
            logger[level](message, meta);
          }
        },
        enumerable: false,
        configurable: true,
      });
    }

    return target; // 返回装饰后的类
  };
}

/**
 * 简化的 @Slf4j 装饰器（无参数）
 */
export function Slf4jSimple(): ClassDecorator {
  return Slf4j({});
}

/**
 * 检查类是否已应用 @Slf4j 装饰器
 */
export function isSlf4jDecorated(target: any): boolean {
  return LoggerMetadata.hasLogger(target);
}