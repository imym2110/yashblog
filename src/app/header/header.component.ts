import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoginFlag : boolean = false;
  isLogOutFlag : boolean = false;

  constructor(private router: Router, private authservice:AuthService, private toast:ToastrService){}

  logOut() {
    this.authservice.isAuthenticate = false;
    this.isLogOutFlag = true;
    localStorage.removeItem('token');
    this.toast.success("Logged Out Successfully")
    this.router.navigate(['']);
  }
}
