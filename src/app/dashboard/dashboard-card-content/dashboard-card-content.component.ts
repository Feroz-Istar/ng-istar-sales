import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../dashboard-card/task';

@Component({
  selector: 'app-dashboard-card-content',
  templateUrl: './dashboard-card-content.component.html',
  styleUrls: ['./dashboard-card-content.component.css']
})
export class DashboardCardContentComponent implements OnInit {
  @Input() task: Task
  constructor() { }

  ngOnInit() {
  }

}
