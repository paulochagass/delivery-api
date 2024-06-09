import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, Matches } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Matches(/^\d{2}\d{5}\d{4}$/)
  cellphone: string;
}
