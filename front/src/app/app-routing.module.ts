import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BuildCourseComponent } from './components/courses/build-course/build-course.component';
import { HomeComponent } from './components/home/home.component';
import {CoursesListComponent} from './components/courses/courses-list/courses-list.component'
import { ShowCoursesComponent } from './components/courses/show-courses/show-courses.component';
import {AllCoursesComponent} from './components/courses/all-courses/all-courses.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'build',component:BuildCourseComponent,canActivate:[AuthGuard]},
  {path:'courseList',component:CoursesListComponent,canActivate:[AuthGuard]},
  {path:'show-course/:id',component:ShowCoursesComponent,canActivate:[AuthGuard]},
  {path:'AllCourses',component:AllCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
