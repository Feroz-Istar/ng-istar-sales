import { Injectable } from '@angular/core';
import { Task } from '../dashboard/dashboard-card/task';

@Injectable({
  providedIn: 'root'
})
export class ComplexService {

  constructor() { }

  getTasks(): Task[] {
    let complexObject = JSON.parse(localStorage.getItem("complexobject"));
    return complexObject.tasks;
  }
}
