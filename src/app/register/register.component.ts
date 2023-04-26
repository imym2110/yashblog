import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({});
  constructor(
    private router: Router, private fb: FormBuilder, private authservice: AuthService, private toast: ToastrService, private strapiservice: StrapiService
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    this.strapiservice.registerUser(this.form.value).subscribe((data) => {
      // console.log(data);
      this.toast.success("You are registered")
      this.router.navigate(['/login'])
    })
  }
}
