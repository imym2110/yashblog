import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { StrapiService } from './strapi.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate: boolean = false;

  constructor(private strapiservice : StrapiService){
    let a = localStorage.getItem('token');
    if (a){
      this.isAuthenticate = true;
    }
  }

  
  login(): Observable<boolean> {
    if (this.strapiservice.getUser('')) {      
      this.isAuthenticate = true;
      // console.log('Loggedin', this.isAuthenticate)
      return of(true);
    }
    else{
      this.isAuthenticate = false;
      // console.log('Loggedout', this.isAuthenticate)
    return of(false);
    }
  }
}