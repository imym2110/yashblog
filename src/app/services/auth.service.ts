import { EventEmitter, Injectable, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { StrapiService } from './strapi.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public hLogflag : Subject<any> = new Subject();    
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
      //  console.log('Loggedin', this.hLogflag)
      return of(true);
    }
    else{
      this.isAuthenticate = false;
      // console.log('Loggedout', this.isAuthenticate)
    return of(false);
    }
  }
}