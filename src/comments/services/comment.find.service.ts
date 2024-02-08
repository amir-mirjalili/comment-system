import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from '../schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentFindService {
  constructor(@InjectModel(Comment.name) private commentModel: Model<Comment>) {
  }

  async getAll(userId:string){
    return  this.commentModel.find({userId,approved:true}).populate("parentId")
  }
}
