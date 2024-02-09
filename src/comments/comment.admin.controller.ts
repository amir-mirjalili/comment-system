import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { CommentFindService } from './services/comment.find.service';
import { CommentDeleteService } from './services/comment.delete.service';
import { CommentUpdateService } from './services/comment.update.service';
import { CommentApproveDto } from './dto/comment.approve.dto';

@Controller('comments/admin')
export class CommentAdminController {
  constructor(
    private readonly commentFindService: CommentFindService,
    private readonly commentDeleteService: CommentDeleteService,
    private readonly commentUpdateService: CommentUpdateService,
  ) {}

  @Get()
  async findAll() {
    return this.commentFindService.getAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.commentDeleteService.removeByAdmin(id);
  }

  @Put(':id')
  async approve(
    @Param('id') id: string,
    @Body() approveDto: CommentApproveDto,
  ) {
    return this.commentUpdateService.approveByAdmin(id, approveDto.approved);
  }
}
