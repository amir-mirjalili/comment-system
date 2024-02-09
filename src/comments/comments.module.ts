import { Module } from '@nestjs/common';
import { CommentUserController } from './comment.user.controller';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentInsertService } from './services/comment.insert.service';
import { CommentFindService } from './services/comment.find.service';
import { CommentDeleteService } from './services/comment.delete.service';
import { CommentAdminController } from './comment.admin.controller';
import { CommentUpdateService } from './services/comment.update.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  controllers: [CommentUserController, CommentAdminController],
  providers: [
    CommentInsertService,
    CommentFindService,
    CommentDeleteService,
    CommentUpdateService,
  ],
})
export class CommentsModule {}
