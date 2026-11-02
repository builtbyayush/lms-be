import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsMongoId } from "class-validator";

export class BulkDeleteLeadsDto {
  @ApiProperty({
    type: [String],
    description: "Lead IDs to delete (MongoDB ObjectId)",
    example: ["60d0fe4f5311236168a109ca"],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(500)
  @IsMongoId({ each: true })
  ids: string[];
}
