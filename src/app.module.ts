import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comment-system'), CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
