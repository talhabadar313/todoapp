import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './args/createtodo';
import { UpdateTodoInput } from './args/updatetodo';
import { TodoSchema } from './schema/todo.schema';

@Resolver(() => TodoSchema)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [TodoSchema], { name: 'todos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => TodoSchema, { name: 'todo' })
  findOne(@Args('id', { type: () => Number }) id: number) {
    return this.todoService.findById(id);
  }

  @Mutation(() => TodoSchema)
  createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ) {
    return this.todoService.create(createTodoInput);
  }

  @Mutation(() => TodoSchema)
  updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ) {
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => String)
  removeTodo(
    @Args('id', { type: () => Number }) id: number,
  ) {
    return this.todoService.remove(id);
  }
}
