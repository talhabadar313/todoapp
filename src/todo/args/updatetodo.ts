import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int)
 id:number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: string;

}