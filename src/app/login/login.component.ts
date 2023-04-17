import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.minLength(4), Validators.maxLength(10), Validators.required]),
  });
  constructor(
    private router: Router,
  ) { }
  ngOnInit() {
    // this.form = this.fb.group({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    // });
  }

  onSubmit() {
    if (this.form.value.username == "yash" && this.form.valid)
    {
      this.router.navigate(['/home']);
    }
  }
}
