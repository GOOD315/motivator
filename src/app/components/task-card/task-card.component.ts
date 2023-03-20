import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MacroTask } from 'src/app/classes/MacroTask';
import { MicroTask } from 'src/app/classes/MicroTask';
import { PriorityEnum } from 'src/app/classes/PriorityEnum';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  editMode: boolean = false;
  @Input() task!: MacroTask;
  form!: FormGroup;
  get microTasks() { return this.form.controls['microTasks'] as FormArray }
  set microTasks(microTasks: any) {
    this.form.controls['microTasks'] = this.fb.array([]);
    this.setMultipleMicroTasks(microTasks);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeEditMode(editMode: boolean) {
    if (editMode) this.setEditMode();
  }

  setEditMode() {
    this.initializeForm();
    this.addMicroTask();
    this.editMode = true;
  }

  setReadingMode() {
    this.editMode = false;
  }

  initializeForm() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),

      priority: new FormControl(PriorityEnum.medium),
      dateFinish: new FormControl(new Date(), Validators.required),
      microTasks: this.fb.array([], Validators.required)
    });
  }

  addMicroTask(microTask?: MicroTask) {
    let microTaskFormGroup = this.setMicroTask(microTask);
    this.microTasks.push(microTaskFormGroup);
  }
  setMicroTask(task?: MicroTask) {
    if (task) {
      return this.fb.group({
        description: new FormControl(task.description, [Validators.required]),
        date: new FormControl(task.date),
      });
    }
    else {
      return this.fb.group({
        description: new FormControl('', [Validators.required]),
        date: new FormControl(new Date()),
      });
    }
  }

  setMultipleMicroTasks(tasks: Array<MicroTask>) {
    if (tasks) tasks.forEach((task, i) => {
      this.addMicroTask(task);
    });
    else this.addMicroTask();
  }
  deleteMicroTask(ff: any) {

  }


  onSubmit(ff: any) {

  }


}
