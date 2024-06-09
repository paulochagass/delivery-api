import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { UUID } from 'crypto';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  @IsUUID()
  id: UUID;
}
