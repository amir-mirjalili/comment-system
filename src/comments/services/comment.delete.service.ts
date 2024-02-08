import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentDeleteService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  async removeByUser(userId: string, id: string) {
    return this.commentModel.deleteOne({ userId, _id: id });
  }

  async removeByAdmin(id: string) {
    return this.commentModel.deleteOne({ _id: id });
  }
}
