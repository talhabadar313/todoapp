import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TodoSchema {
 
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
 
  @Field()
  description: string;
 
  @Field()
  date: string;
}
