import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentInsertDto } from '../dto/comment.insert.dto';
import {Comment} from '../schemas/comment.schema';
import { Types } from 'mongoose';


@Injectable()
export class CommentInsertService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {}

  async create(comment: CommentInsertDto) {
    comment.userId=comment.userId?comment.userId: new Types.ObjectId().toString()
    const createdComment = new this.commentModel(comment);
    return  createdComment.save();
  }

}
