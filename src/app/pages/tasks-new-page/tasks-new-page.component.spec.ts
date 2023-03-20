import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksNewPageComponent } from './tasks-new-page.component';

describe('TasksNewPageComponent', () => {
  let component: TasksNewPageComponent;
  let fixture: ComponentFixture<TasksNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksNewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
