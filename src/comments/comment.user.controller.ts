import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CommentInsertDto } from './dto/comment.insert.dto';
import { CommentInsertService } from './services/comment.insert.service';
import { CommentFindService } from './services/comment.find.service';

@Controller('comments/user')
export class CommentsController {
  constructor(private readonly commentInsertService: CommentInsertService,private readonly commentFindService:CommentFindService) {}

  @Post()
  async create(@Body() commentDto: CommentInsertDto) {
    return  this.commentInsertService.create(commentDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: string){
    return this.commentFindService.getAll(userId)
  }

}
