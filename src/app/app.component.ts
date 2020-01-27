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

  constructor() {}

  ngOnInit() {
    this.createMode = false;
    this.tasks = [
      {
        id: 1,
        description: "Coucou",
        dateCreation: new Date()
      },
      {
        id: 2,
        description: "Bye bye",
        dateCreation: new Date("2011-10-10")
      }
    ];
  }

  public toggleCreateMode() {
    this.createMode = !this.createMode;
  }
  public addTask(description: string) {
    let newId = Math.max.apply(null, this.tasks.map(function(o) { return o.id; })) + 1;
    let newTask = new Task(newId, description);
    this.tasks.push(newTask);

    // After adding the new task, we close the form
    this.toggleCreateMode();
  }
}
