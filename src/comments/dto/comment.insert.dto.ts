import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CommentInsertDto {
  @IsString()
  content: string;
  @IsString()
  @IsOptional()
  parentId: string;
  @IsString()
  @IsOptional()
  userId:string

}