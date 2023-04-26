import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent {
  catgdetails: any[] = [];
  public editcatgform: FormGroup;

  constructor(private detail: FormBuilder, private strapiservice: StrapiService, private toast: ToastrService, private router:Router) {
    this.editcatgform = this.detail.group({
      id: ['', Validators.required],
      category_title: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  editCatgDetails(catgid: number): void{
    this.strapiservice.editCatg(this.editcatgform.value, catgid).subscribe(resp=>{
      // console.log(resp , 'Details');
      this.toast.success('Updated successfully')
        this.router.navigate(['admin/categories'])
    })
  }
}
