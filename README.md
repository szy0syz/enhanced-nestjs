# Enhanced-Nestjs

## Notes

### 全局路由前缀

```ts
// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('serv'); // 全局路由前缀

  await app.listen(3000);
}
bootstrap();
```

- NestJS的设计模式：`Controller`、`Service`、`Module` 三者共同努力，形成一个模块。
  - `Controller`：传统意义上的控制器，提供 api 接口，负责处理路由、中转、验证等一些简洁的业务；
  - `Service`：又称为 Provider， 是一系列服务、repo、工厂方法、helper 的总称，主要负责处理具体的业务，如数据库的增删改查、事务、并发等逻辑代码；
  - `Module`: 负责将 Controller 和 Service 连接起来，类似于 namespace 的概念；

### 创建模块

- 顺序：先 Service，再 Controller，[ `最后 Module` ]
- 如果使用 `nest g` 命令创建的会自动添加到 `app.module.ts`
- 如果想手动页可以，创建可选的 `Module`

```js

```
