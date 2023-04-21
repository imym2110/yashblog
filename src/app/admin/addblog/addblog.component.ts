import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from 'src/app/services/strapi.service';


@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent {
  blogdetails:any[]=[];
  mydata:any[]=[];
  public addblogform: FormGroup;
  category: any;

  constructor(private detail: FormBuilder, private StrapiService: StrapiService, private toast : ToastrService) {                                                                                                   
    this.addblogform = this.detail.group({                                                                                                   
      title: [''],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      featured_RadioButton : true,
      categories: [0],
      //image: ''
    });                                                                                                        
  }
  ngOnInit(){
    this.getcategory();
  }
  onSubmit(): void {     
    
    console.log(this.addblogform.value, 'dddd')

    this.StrapiService.addBlogForm(this.addblogform.value).subscribe(resp=>{
      console.log(resp, 'RESP')
    })
    console.log('Your details have been submitted', this.addblogform.value);                                                                                                   
    this.blogdetails.push(this.addblogform.value)                                                                                                   
    console.log('this.blogdetails',this.blogdetails)
    this.addblogform.reset();
  }

  getcategory(){
    this.StrapiService.getCategoryData().subscribe(category_data => {
      console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x=>{
        console.log(x,'x');
        this.mydata.push(x);
      })
    },()=>{},
    ()=>{
      // this.addblogform = this.detail.group({
        // categories: [0]
      // });
    }
    );
    console.log(this.mydata);
  }
}
