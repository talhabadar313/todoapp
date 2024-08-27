import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoInput } from './args/createtodo';
import { UpdateTodoInput } from './args/updatetodo';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    findById(id: number): Promise<Todo> {
        return this.todoRepository.findOneBy({ id });
    }

    create(createTodo: CreateTodoInput): Promise<Todo> {
        const newTodo = this.todoRepository.create(createTodo);
        return this.todoRepository.save(newTodo);
    }

    async update(id: number, updateTodo: UpdateTodoInput): Promise<Todo> {
        await this.todoRepository.update(id, updateTodo);
        return this.findById(id);
    }

    async remove(id: number): Promise<string> {
        await this.todoRepository.delete(id);
        return "Todo has been deleted"
    }
}
