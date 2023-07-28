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
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file to Upload
  image_id= 0; 

  constructor(private detail: FormBuilder, private strapiservice: StrapiService, private toast: ToastrService, private router:Router) {
    this.editcatgform = this.detail.group({
      id: ['', Validators.required],
      category_title: ['', Validators.required],
      category_image: ['']
    });
  }
  ngOnInit() {
  }

  editCatgDetails(catgid: number): void{

    if (this.file) {
      this.loading = !this.loading;
      // console.log(this.file, '2');
      this.strapiservice.upload(this.file).subscribe(
        (x: any) => {
          // console.log(x[0].id, 'X');
          this.image_id = x[0].id;        
        },
        (error: any) => {
          // console.log('Error', error);
        },
        () => {
          this.loading = false;
          // console.log('complete');
          this.editcatgform.value.category_image = this.image_id;
          // console.log(this.addcatgform.value, 'testtt');
          

          this.strapiservice.editCatg(this.editcatgform.value, catgid).subscribe(resp=>{
            // console.log(resp , 'Details');
            this.toast.success('Updated successfully')
              this.router.navigate(['admin/categories'])
          })
        }
      );
    }
    
  }

  


  onChange(event:any) {
    this.file = event.target.files[0];
    // console.log(this.file, '1');
  }
}
