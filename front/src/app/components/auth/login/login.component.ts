import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean=true;
  constructor(private fb:FormBuilder,private authService:AuthService,private router:Router){
    if(this.authService.isLogin()){
      router.navigate(["/home"])
    }
  }
  buildForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
   });
  ngOnInit(): void {}
  successdata:any
  login(){
    this.isLoading=false;
   var myFormData=new FormData();
   myFormData.append('email',this.buildForm.value.email);
   myFormData.append('password',this.buildForm.value.password);
    this.authService.login(myFormData).subscribe((res:any)=>{
      this.successdata=res;
      if(this.successdata['status']=="success"){
        this.authService.prepareUserData();
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("name",res.data.name);
        localStorage.setItem("role",res.data.role);
        this.isLoading=true;
        this.authService.currentUser=res.data.name;
        this.authService.UserRole=res.data.role;
       Swal.fire({
         title:'Hurrey !!',
         text:this.successdata['data']['name']+"has been registered successfully",
         icon:"success"
       })
       this.buildForm.reset();
       this.router.navigate(['/home'])
      }
      if(this.successdata['status']=="error"){
        console.log("res = ",res);
        this.isLoading=false;
        Swal.fire({
          title:'opps !!',
          text:"Login details are not correct",
          icon:"error"
        })

       }
    })
  }

}
