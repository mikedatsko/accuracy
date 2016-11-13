export class Task {
    name: string;
    description?: string;
    taskId?: string;
    userId?: string;

    constructor(name: string, description?: string, taskId?: string, userId?: string) {
        this.name = name;
        this.description = description;
        this.taskId = taskId;
        this.userId = userId;
    }
}