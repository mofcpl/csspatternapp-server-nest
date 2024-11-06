import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsModule } from './authors/authors.module';
import { ProjectsModule } from './projects/projects.module';
import { Author } from './authors/authors.entity';
import { Project } from './projects/projects.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'csspatternapp',
      password: 'password',
      database: 'csspatternapp',
      entities: [Author, Project],
      synchronize: true
    }),
    AuthorsModule, 
    ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
