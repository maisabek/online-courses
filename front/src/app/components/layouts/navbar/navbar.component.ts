import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public AuthService:AuthService,private router:Router) {
   }

  ngOnInit(): void {
    this.AuthService.prepareUserData()
  }
  logout(){
    this.AuthService.logout();
    this.router.navigate(["/home"])
  }

}
