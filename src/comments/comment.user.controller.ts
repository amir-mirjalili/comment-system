import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentInsertDto } from './dto/comment.insert.dto';
import { CommentInsertService } from './services/comment.insert.service';
import { CommentFindService } from './services/comment.find.service';
import { CommentDeleteService } from './services/comment.delete.service';

@Controller('comments/user')
export class CommentsController {
  constructor(
    private readonly commentInsertService: CommentInsertService,
    private readonly commentFindService: CommentFindService,
    private readonly commentDeleteService: CommentDeleteService,
  ) {}

  @Post()
  async create(@Body() commentDto: CommentInsertDto) {
    return this.commentInsertService.create(commentDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: string) {
    return this.commentFindService.getAll(userId);
  }

  @Delete(':userId')
  async remove(@Param('userId') userId: string, @Query('id') id: string) {
    return this.commentDeleteService.removeByUser(userId, id);
  }
}
