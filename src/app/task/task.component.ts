import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  allTasks: any[] = [];
  constructor(private _httpService:TaskServiceService) { }


  ngOnInit(): void {
  }
  getTasks(): void {
    this.allTasks = this._httpService.task;
  }
}
