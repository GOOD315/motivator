import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MicroTask } from 'src/app/classes/MicroTask';
import { PriorityEnum } from 'src/app/classes/PriorityEnum';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-new-page',
  templateUrl: './tasks-new-page.component.html',
  styleUrls: ['./tasks-new-page.component.scss']
})
export class TasksNewPageComponent implements OnInit {

  form: FormGroup;
  get microTasks() { return this.form.controls['microTasks'] as FormArray }
  set microTasks(microTasks: any) {
    this.form.controls['microTasks'] = this.fb.array([]);
    this.setMultipleMicroTasks(microTasks);
  }

  constructor(private fb: FormBuilder, private service: TasksService) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),

      priority: new FormControl(PriorityEnum.medium),
      dateStart: new FormControl(today, Validators.required),
      dateFinish: new FormControl(today, Validators.required),
      microTasks: this.fb.array([], Validators.required)
    });

    this.addMicroTask();
  }

  ngOnInit(): void {
  }

  addMicroTask(microTask?: MicroTask) {
    let microTaskFormGroup = this.setMicroTask(microTask);
    this.microTasks.push(microTaskFormGroup);
  }

  deleteMicroTask(i: number) {
    this.microTasks.removeAt(i);
  }

  setMicroTask(task?: MicroTask) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (task) {
      return this.fb.group({
        description: new FormControl(task.description, [Validators.required]),

        date: new FormControl(task.date),
      });
    }
    else {
      return this.fb.group({
        description: new FormControl('', [Validators.required]),

        date: new FormControl(today),
      });
    }
  }

  onSubmit(form: FormGroup) {
    // console.log(form.value);
    // console.log(form.value.dateStart);
    this.service.createMacroTask(form.value).subscribe();
  }

  setMultipleMicroTasks(tasks: Array<MicroTask>) {
    if (tasks) tasks.forEach((task, i) => {
      this.addMicroTask(task);
    });
    else this.addMicroTask();
  }
}
