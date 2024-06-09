import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  cellphone: string;
}
