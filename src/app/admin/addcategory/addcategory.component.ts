import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent    {
  msg='';
  profileupdate='';
  url:any;
  theFile:any;
  fileToUpload12:any;
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file to Upload
  image_id= 0; 

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
          this.addcatgform.value.category_image = this.image_id;
          // console.log(this.addcatgform.value, 'testtt');
          
          this.postform();
        }
      );
    }
   
  }

  public uploadedFiles: Array<File> = [];

  public clear(): void {
      this.uploadedFiles = [];
  }


  onChange(event:any) {
    this.file = event.target.files[0];
    // console.log(this.file, '1');
  }

  postform(){
    this.strapiservice.addCatgform(this.addcatgform.value).subscribe(resp=>{
      // console.log(resp , 'Details');
      this.toast.success('Updated successfully')
        this.router.navigate(['admin/categories'])
        // console.log(resp, 'resp');
    })
  }

}
