import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CommentInsertDto } from './dto/comment.insert.dto';
import { CommentInsertService } from './services/comment.insert.service';

@Controller('comments/user')
export class CommentsController {
  constructor(private readonly commentsService: CommentInsertService) {}

  @Post()
  async create(@Body() commentDto: CommentInsertDto) {
    return  this.commentsService.create(commentDto);
  }

}
