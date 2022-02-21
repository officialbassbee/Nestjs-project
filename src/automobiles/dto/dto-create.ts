import { IsNumber, MaxLength, MinLength } from 'class-validator';

export class CreateAutoDto {
  readonly name: string;

  readonly description: string;

  @IsNumber()
  @MinLength(4)
  @MaxLength(20)
  readonly regnumber: number;
}
