import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoService, TodoCreationParams } from "./todoService";
import { todo } from "node:test";

@Route("todo")
export class TodoController extends Controller {
  /**
   *
   * @param todoId
   * @returns This is the controller for getting Todos
   */
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    let todoService = new TodoService();
    return todoService.get(todoId);
  }
}
