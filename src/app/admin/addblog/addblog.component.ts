import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent {
  blogdetails: any[] = [];
  mydata: any[] = [];
  public addblogform: FormGroup;
  category: any;
  loading: boolean = false; // Flag variable
  file: any; // Variable to store file to Upload
  image_id = 0;


  constructor(private detail: FormBuilder, private StrapiService: StrapiService, private toast: ToastrService, private route: Router) {
    this.addblogform = this.detail.group({
      title: [''],
      summary: ['', Validators.required],
      description: ['', Validators.required],     
      featradio: ['', Validators.required],
      categories: [0],
      image: ['']
    });
  }
  ngOnInit() {
    this.getcategory();
  }
  onSubmit(): void {
    // console.log(this.addblogform.value, 'testdat')
    if (this.file) {
      this.loading = !this.loading;
      // console.log(this.file, '2');
      this.StrapiService.upload(this.file).subscribe(
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
          this.addblogform.value.image = this.image_id;
          //JSON.stringify(this.addblogform.value.featured_RadioButton)
          // console.log(this.addblogform.value, 'testtt');
          this.postform();
        }
      );
      // console.log(this.addblogform.value, 'dddd') 
    }
  }

  getcategory() {
    this.StrapiService.getCategoryData().subscribe(category_data => {
      // console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x => {
        // console.log(x,'x');
        this.mydata.push(x);
      })
    }
    );
    // console.log(this.mydata);
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file, '1');
  }
  postform() {
    this.StrapiService.addBlogForm(this.addblogform.value).subscribe(resp => {
      // console.log(resp, 'RESP')
    })
    // console.log('Your details have been submitted', this.addblogform.value);                                                                                                   
    //this.blogdetails.push(this.addblogform.value)
    // console.log('this.blogdetails', this.blogdetails)
    this.toast.success('Updated successfully')
        this.route.navigate(['admin/blogs'])
    this.addblogform.reset();
  }
}
