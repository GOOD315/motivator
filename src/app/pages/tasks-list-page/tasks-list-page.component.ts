import { Component, OnInit } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';
import { MacroTask } from 'src/app/classes/MacroTask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list-page',
  templateUrl: './tasks-list-page.component.html',
  styleUrls: ['./tasks-list-page.component.scss']
})
export class TasksListPageComponent implements OnInit {

  tasks!: Array<MacroTask>;
  tasksSubscription!: Subscription;

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.service.getAllTasks().pipe(
    //   map(data => this.tasks = data)
    // ).subscribe()
    this.service.getAllTasks().subscribe();
  }
}
