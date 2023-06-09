import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTreeListComponent } from './task-tree-list.component';

describe('TaskTreeListComponent', () => {
  let component: TaskTreeListComponent;
  let fixture: ComponentFixture<TaskTreeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTreeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
