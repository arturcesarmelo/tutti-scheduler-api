import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
