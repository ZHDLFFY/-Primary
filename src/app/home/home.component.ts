import { Component, OnInit } from '@angular/core';
import { Student, All_stu } from './student'
import { Router } from '@angular/router';
import { ListStuComponent } from '../list-stu/list-stu.component';
import { SelectStuComponent } from '../select-stu/select-stu.component';
import { LoginFComponent } from '../login-f/login-f.component';
import { AuthService } from '../auth.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


export const ChildrenRoutes = [
  { path: '', redirectTo: 'select-stu', pathMatch: 'full' },
  { path: 'list-stu', component: ListStuComponent },
  { path: 'select-stu', component: SelectStuComponent },
  { path: 'login', component: LoginFComponent }


]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  private students: Student[];
  private Showmale: number;
  private Show: number;
  private Course: string;


  constructor(private router: Router, private auth: AuthService, private login: LoginFComponent) { this.students = All_stu; }

  ngOnInit() {
  }
  menuClick(index) {

    this.menuIndex = index;
    if (index == 1) {
      this.router.navigate(['/home/list-stu']);
    }

    if (index == 2) {
      this.router.navigate(['/home/select-stu']);
    }

    if (index == 3) {
      this.router.navigate(['./login']);
      this.login.tuichu();
    }

  }

}
