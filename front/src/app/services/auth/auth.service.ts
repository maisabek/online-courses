import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:any;
  UserRole:any;
  constructor(private http:HttpClient) {
    this.currentUser=localStorage.getItem('name')
    this.UserRole=localStorage.getItem('role')

  }
  register(data:any):Observable<any>{
    return this.http.post('http://localhost:8000/register',data);
  }
  login(data:any):Observable<any>{
   return this.http.post('http://localhost:8000/LoginPage',data);
  }
  getCurrentUser():Observable<any>{
    return this.http.get('http://localhost:8000/CurrentUser')
  }
  isLogin(){
    return !!localStorage.getItem('token');
  }
  logout(){
       localStorage.clear()
  }
  getToken(){
    localStorage.getItem('token')
  }
  prepareUserData(){
    // if(this.isLogin()){
      this.getCurrentUser().subscribe((res)=>{
        console.log("res == ",res)
        // this.currentUser=res.data.name
      })
    // }
  }

}
