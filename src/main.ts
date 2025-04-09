import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//test
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  await app.listen(3000);
}
bootstrap();
