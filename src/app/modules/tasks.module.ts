import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from 'src/app/pages/main-page/main-page.component';
import { TasksListPageComponent } from '../pages/tasks-list-page/tasks-list-page.component';
import { TasksNewPageComponent } from '../pages/tasks-new-page/tasks-new-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { TasksService } from '../services/tasks.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TaskTreeListComponent } from '../components/task-tree-list/task-tree-list.component';



@NgModule({
  declarations: [MainPageComponent, TasksListPageComponent, TasksNewPageComponent, TaskCardComponent, TaskTreeListComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,

    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,

    RouterModule.forChild(
      [
        {
          path: '',
          component: MainPageComponent
        },
        {
          path: 'list',
          component: TasksListPageComponent
        },
        {
          path: 'new',
          component: TasksNewPageComponent
        }
      ]
    )
  ],
  providers: [TasksService]
})
export class TasksModule { }
