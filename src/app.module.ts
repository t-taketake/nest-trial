import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Samoedo } from './entity/samoedoentity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'testdog',
      entities: [__dirname + '/**/*.entity{.ts,.js}', Samoedo],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Samoedo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
