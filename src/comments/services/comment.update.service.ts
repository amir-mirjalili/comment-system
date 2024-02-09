import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentUpdateService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  async approveByAdmin(id: string, approved: boolean) {
    return this.commentModel.findByIdAndUpdate(
      { _id: id },
      { approved },
      { new: true },
    );
  }
}
