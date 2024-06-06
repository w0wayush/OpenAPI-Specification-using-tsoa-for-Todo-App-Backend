import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">;

export class TodoService {
  public get(todoId: string): Todo {
    return {
      id: todoId,
      title: "mock title",
      description: "mock description",
      done: false,
    };
  }

  public create(todoCreationParams: TodoCreationParams): Todo {
    console.log("Mock db call");
    return {
      id: "1",
      title: "mock title",
      description: "mock description",
      done: false,
    };
  }
}
