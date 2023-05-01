import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedInFlag: boolean = false;
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  form: FormGroup = new FormGroup({});
  constructor(
    private router: Router, private fb: FormBuilder, private authservice: AuthService, private toast: ToastrService, private strapiservice: StrapiService,
  ) { }
  ngOnInit() {
    // console.log('Authflag', this.authservice?.isAuthenticate)

    if (this.authservice.isAuthenticate === true) {
      this.isLoggedInFlag = true;
    }
    else {
      this.isLoggedInFlag = false
    }
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.strapiservice.getUser(this.form.value).subscribe((data:any) => {
      // console.log(data, 'ddddddddddd')
      if(data?.jwt){
        localStorage.setItem('token',data.jwt);  
        this.authservice.hLogflag.next(true)     
        this.authservice.isAuthenticate = true;
        this.router.navigate(['/admin/addblog']);
      }
    })
    
  }
}
