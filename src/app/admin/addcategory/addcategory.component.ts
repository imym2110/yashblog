import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent {
  catgdetails: any[] = [];
  public addcatgform: FormGroup;

  constructor(private detail: FormBuilder, private strapiservice: StrapiService, private toast: ToastrService, private router:Router, private http: HttpClient) {
    this.addcatgform = this.detail.group({
      category_title: ['', Validators.required],
      category_image : ['']
    });
  }
  ngOnInit() {
  }

  addCatgDetails(): void{
    this.strapiservice.addCatgform(this.addcatgform.value).subscribe(resp=>{
      // console.log(resp , 'Details');
      this.toast.success('Updated successfully')
        this.router.navigate(['admin/categories'])
        // console.log(resp, 'resp');
        
    })
  }
}
