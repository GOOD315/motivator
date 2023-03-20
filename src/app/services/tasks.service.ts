import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { MacroTask } from '../classes/MacroTask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "api/tasks";

  private macroTasks = new BehaviorSubject<MacroTask[]>([]);
  macroTasks$: Observable<MacroTask[]> = this.macroTasks.asObservable();
  macroTasksLoaded = false;

  constructor(private http: HttpClient) { }

  public getAllTasks() {
    return this.http.get<MacroTask[]>(this.API_URL).pipe(
      tap(result => { this.macroTasks.next(result) }),
      tap(() => this.macroTasksLoaded = true),
    )
  }

  public createMacroTask(task: MacroTask) {
    console.log(task);
    return this.http.post<MacroTask>(this.API_URL, task);
  }

  public updateMacroTask(task: MacroTask) {
    return this.http.put<MacroTask>(this.API_URL, task);
  }

  public deleteMacroTask(aid: number) {
    return this.http.delete<MacroTask>(this.API_URL + aid);
  }
}
