import { Component, Input } from "@angular/core";
import { Task } from "./models/task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  // The list of tasks in the to-do list
  public tasks: Task[];

  // Is the user creating a task?
  public createMode: boolean;

  // The task being edited
  public editedTask: Task;

  constructor() {}

  ngOnInit() {
    this.createMode = false;
    this.editedTask = null;
  }

  public toggleCreateMode() {
    this.createMode = !this.createMode;
  }

  public addTask(description: string) {
    let maxId =
      this.tasks.length > 0
        ? Math.max.apply(
            null,
            this.tasks.map(function(o) {
              return o.id;
            })
          )
        : 0;
    let newTask = new Task(maxId + 1, description);
    this.tasks.push(newTask);

    // After adding the new task, we close the form
    this.toggleCreateMode();
  }

  public deleteTask(id: number) {
    this.tasks = this.tasks.filter(function(task) {
      return task.id !== id;
    });
  }

  public toggleEditMode(task: Task) {
    this.editedTask == task ? null : task;
  }
}
