import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../services/strapi.service';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [DatePipe],
})
export class BlogListComponent {

  //isFeatData:boolean=false
  apiUrl = environment.apiUrl;
  myDate = new Date();
  getblogs: any;
  allBlogsData:any[]=[];
  allFeaturedData:any[]=[];
  alldata:any[]=[];
  categoryidFromURL:any;

  constructor(private datePipe: DatePipe, private strapiservice: StrapiService, private activatedRoute: ActivatedRoute) {
    this.datePipe.transform(this.myDate, 'dd/mm/yyyy');
    //console.log(this.myDate);
  }


  ngOnInit(){
    //console.log(this.route.param, 'route');
    this.activatedRoute.paramMap.subscribe((params) => {
      this.categoryidFromURL = params.get('catid');
      if(this.categoryidFromURL === 'FeaturedBlogs')
      {   
        //  this.isFeatData = true;
          this.featuredCategories(); 
      }
      else
      {
        // this.isFeatData = false;
        this.nonFeaturedCategories(); 
      }
    });  
  }

  nonFeaturedCategories()
  {
    this.strapiservice.getAllBlogByCatg(this.categoryidFromURL).subscribe(resp=>{
      Object.values(resp).filter(x=>{
          x.filter((y: any)=>{
            this.allBlogsData.push(y)
          })
      }) 
    })
  }

  featuredCategories()
  {
    this.strapiservice.getAllFeaturedBlog(true).subscribe(blog => {
      console.log(blog,'react_blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.allFeaturedData.push(x);
      })
    })
  }
}
