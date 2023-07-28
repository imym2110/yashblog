import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent {
  blogdetails: any[] = [];
  mydata: any[] = [];
  public editblogform: FormGroup;
  getblogs: any;
  category: any
  allblogData: any[] = [];
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file to Upload
  image_id = 0;

  constructor(private detail: FormBuilder, private strapiservice: StrapiService, private toast: ToastrService, private router: Router) {
    this.editblogform = this.detail.group({
      id: [''],
      title: [''],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      featradio: [''],
      categories: [0],
      image : ['']
    });
  }
  ngOnInit() {
    this.getcategory();
  }

  getBlogs() {
    this.strapiservice.getAllBlog(100).subscribe(res => {
      this.getblogs = res;
      // console.log(res)
      Object.values(this.getblogs.data).filter(x => {
        this.allblogData.push(x);
      })
    })
  }

  getcategory() {
    this.strapiservice.getCategoryData().subscribe(category_data => {
      // console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x => {
        // console.log(x,'x');
        this.mydata.push(x);
      })
    });
    // console.log(this.mydata);
  }

  editBlogDetails(blogid: number): void {


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
          this.editblogform.value.image = this.image_id;
          // console.log(this.addcatgform.value, 'testtt');

          this.strapiservice.editBlog(this.editblogform.value, blogid).subscribe(resp => {
            // console.log(resp, 'RESP')
            this.toast.success('Updated successfully')
            this.router.navigate(['admin/blogs'])
          })
          // console.log('Your details have been submitted', this.editblogform.value);
          this.blogdetails.push(this.editblogform.value)
          // console.log('this.blogdetails', this.blogdetails)
          this.editblogform.reset();
        }
      );
    }
    // console.log(this.editblogform.value, 'dddd')
    // console.log(blogid, 'id');
  }


  onChange(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file, '1');
  }
}