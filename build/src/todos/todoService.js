"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mock title",
            description: "mock description",
            done: false,
        };
    }
    create(todoCreationParams) {
        console.log("Mock db call");
        return {
            id: "1",
            title: "mock title",
            description: "mock description",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
