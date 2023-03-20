import { Component, Input, OnInit } from '@angular/core';
import { MacroTask } from 'src/app/classes/MacroTask';

@Component({
  selector: 'task-tree',
  templateUrl: './task-tree-list.component.html',
  styleUrls: ['./task-tree-list.component.scss']
})
export class TaskTreeListComponent implements OnInit {

  @Input() tasks: MacroTask[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
