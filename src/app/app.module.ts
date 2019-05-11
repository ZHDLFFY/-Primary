import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFComponent } from './login-f/login-f.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route, ROUTES, Routes } from '@angular/router';
import { HomeComponent, ChildrenRoutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListStuComponent } from './list-stu/list-stu.component';
import { SelectStuComponent } from './select-stu/select-stu.component';
import { LogginedGuard } from './guards/loggedIn.guard';





/*
const ChildrenRoutes: Routes = [
  { path: '', redirectTo: 'select-stu', pathMatch: 'full' },
  { path: 'list-stu', component: ListStuComponent },
  { path: 'select-stu', component: SelectStuComponent }

]*/

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: ChildrenRoutes, canActivate: [LogginedGuard] },
  { path: 'about', component: AboutComponent, canActivate: [LogginedGuard] },
  { path: 'login', component: LoginFComponent },

];



@NgModule({
  declarations: [
    AppComponent,
    LoginFComponent,
    HomeComponent,
    AboutComponent,
    ListStuComponent,
    SelectStuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LogginedGuard, LoginFComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
