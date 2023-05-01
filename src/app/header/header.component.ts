import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{
  tempIsLog:boolean = false;
  isLoggedIn: any;
  constructor(private router: Router, private authservice: AuthService, private toast: ToastrService) {}
  
  ngOnInit() {
    if( localStorage.getItem('token'))
    {
      // console.log('yes')  
      this.tempIsLog = true;
    }
    else
    {
      // console.log('No');
      this.tempIsLog = false;
    }
  }


  logOut() {
    this.authservice.isAuthenticate = false;
    localStorage.removeItem('token');
    this.authservice.hLogflag.next(false)
    this.toast.success("Logged Out Successfully")
    this.router.navigate(['']);
    
  }
  
  ngDoCheck(): void {
      //console.log(changes, 'chamnge');
      this.authservice.hLogflag.subscribe(x=>{
        // console.log(x, 'x');
        this.tempIsLog = x;
      })
  }
}
