import { Module } from '@nestjs/common';
import { CommentsController } from './comment.user.controller';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentInsertService } from './services/comment.insert.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers:[CommentsController],
  providers:[CommentInsertService]
})
export class CommentsModule {}
