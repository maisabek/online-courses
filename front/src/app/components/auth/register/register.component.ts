import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading:boolean=true
  constructor(public authService:AuthService,private router:Router){
    if(this.authService.isLogin()){
      router.navigate(["/home"])
    }
  }
  ngOnInit(): void {}
  data=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl(),
    role:new FormControl()
   });
   successdata:any;
  submitData(){
    var myFormData=new FormData();
    myFormData.append('name',this.data.value.name);
    myFormData.append('email',this.data.value.email)
    myFormData.append('password',this.data.value.password)
    myFormData.append('confirmPassword',this.data.value.confirmPassword)
    myFormData.append('role',this.data.value.role)
    this.isLoading=false;
    this.authService.register(myFormData).subscribe((res)=>{
      this.successdata=res;
      if(this.successdata['status']=="success"){
        this.isLoading=true
       localStorage.setItem("token",res.data.token);
       localStorage.setItem("name",res.data.name);
       localStorage.setItem("role",res.data.role);
       this.authService.prepareUserData();
       this.authService.currentUser=res.data.name;
       this.authService.UserRole=res.data.role;

       Swal.fire({
         title:'Hurrey !!',
         text:this.successdata['data']['name']+" has been registered successfully",
         icon:"success"
       });
       this.data.reset();
       this.router.navigate(['/home'])
      }

      if(this.successdata['status']=="error"){
        Swal.fire({
          title:'opps !!',
          text:res.error.email,
          icon:"error"
        })
       }
    })
  }
}
