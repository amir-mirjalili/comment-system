import { IsBoolean } from 'class-validator';

export class CommentApproveDto {
  @IsBoolean()
  approved: boolean;
}
