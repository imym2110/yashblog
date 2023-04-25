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

  constructor(private detail: FormBuilder, private strapiservice: StrapiService, private toast: ToastrService, private router:Router) {
    this.editblogform = this.detail.group({
      id: [''],
      title: [''],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      featured_RadioButton: true,
      categories: [0],
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

  getcategory(){
    this.strapiservice.getCategoryData().subscribe(category_data => {
      console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x=>{
        console.log(x,'x');
        this.mydata.push(x);
      })
    });
    console.log(this.mydata);
  }

    editBlogDetails(blogid: number): void {
      console.log(this.editblogform.value, 'dddd')
      console.log(blogid, 'id');
      

    this.strapiservice.editBlog(this.editblogform.value, blogid).subscribe(resp => {
        console.log(resp, 'RESP')
        this.toast.success('Updated successfully')
        this.router.navigate(['admin'])
      })
    console.log('Your details have been submitted', this.editblogform.value);
      this.blogdetails.push(this.editblogform.value)                                                                                                   
    console.log('this.blogdetails', this.blogdetails)
    this.editblogform.reset();
    }
  }