import { Component, OnInit } from '@angular/core';
import { Student, All_stu } from './student'
@Component({
  selector: 'app-select-stu',
  templateUrl: './select-stu.component.html',
  styleUrls: ['./select-stu.component.css']
})

export class SelectStuComponent implements OnInit {
  private students: Student[];
  private Showmale: number;
  private Show: number;
  private Course: string;

  constructor() { this.students = All_stu; }

  ngOnInit() {
  }
}
