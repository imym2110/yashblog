import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../services/strapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mydata: any[] =[];
  selectedFeaturedData: any[]=[];
  apiUrl = environment.apiUrl;

  constructor(private strapiservice: StrapiService,private scroller: ViewportScroller) {}

 // getcategory:any;
  category: any
  featuredData:any[]=[];
  cssData:any[]=[];
  jsData:any[]=[];
  reactData:any[]=[];

  getblogs: any;
  cssCategoryData:any;
  ngOnInit(): void {
    this.categories();
    //this.cssblogs();
    //this.jsblogs();
    //this.reactblogs();
    this.featuredBlogs();
    this.cssBlogsData();
    this.jsBlogsData();
    this.reactBlogsData();
  }
  goDown() {
    this.scroller.scrollToAnchor("target");
  }

  categories() {
    this.strapiservice.getselectedcategory(5).subscribe(category_data => {
      // console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x=>{
        //console.log(x,'x');
        this.mydata.push(x);
      })
    }
    );
  }

  getAllarticles(){
    this.strapiservice.getselectedcategory(5).subscribe(blog => {
      // console.log(blog,'blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.selectedFeaturedData.push(x);
      })
   })
  }

  featuredBlogs(){
    this.strapiservice.getFeaturedBlog(4,true).subscribe(blog => {
      // console.log(blog,'feat_blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.featuredData.push(x);
      })
    })
  }

  cssBlogsData(){
    this.strapiservice.getBlogByCategory(4,'CSS').subscribe(blog => {
      // console.log(blog,'css_blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.cssData.push(x);
      })
    })
  }

  jsBlogsData(){
    this.strapiservice.getBlogByCategory(4,'Javascript').subscribe(blog => {
      // console.log(blog,'js_blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.jsData.push(x);
      })
    })
  }

  reactBlogsData(){
    this.strapiservice.getBlogByCategory(4,'React JS').subscribe(blog => {
      // console.log(blog,'react_blog_data')
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        //console.log(x,'x');
        this.reactData.push(x);
      })
    })
  }
}
                                                                