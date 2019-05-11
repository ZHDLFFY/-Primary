import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggdein = false;
  constructor(private httpclient: HttpClient, private router: Router) { }

  login(u: any): boolean {
    /*user: string, password: string
        let u = {
          username: user,
          password:password
        }*/
    this.httpclient.post('http://localhost:8081/login', JSON.stringify(u)).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.loggdein = true;
          this.callback();
        } else {
          this.loggdein = false;
        }
      }
    );
    return true;
  }

  logout() {
    this.loggdein = false;

  }

  isLoggedin(): boolean {
    return this.loggdein;
  }

  callback() {
    this.router.navigate(['./home']);
  }
}
