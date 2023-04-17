import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private route: Router) { }

 // page = Number of entities to return (default: 25);  
 // isfeatured = you can return boolean value
  // categoryName = Pass Category name

  getBlogData(){
    return this.http.get(this.apiUrl + '/api/blogs?populate=*')
  }

  getCategoryData(){
    return this.http.get(this.apiUrl + '/api/categories?populate=*')
  }

  getselectedcategory(page:any){
    return this.http.get(this.apiUrl + '/api/categories?pagination[limit]='+ page + '&populate=*')
  }
  getAllFeaturedBlog(isfeatured:boolean){
    return this.http.get(this.apiUrl + '/api/blogs?filters[isfeatured]='+isfeatured+'&populate=*')
  }
  getFeaturedBlog(page:any, isfeatured:boolean){
    return this.http.get(this.apiUrl + '/api/blogs?pagination[limit]='+page+'&filters[isfeatured]='+isfeatured+'&populate=*')
  }

  getBlogByCategory(page:any, categoryname:string){
    return this.http.get(this.apiUrl + '/api/blogs?pagination[limit]='+page+'&filters[category]='+categoryname+'&populate=*')
  }

  getAllBlogByCatg(categoryname:string){
    return this.http.get(this.apiUrl + '/api/blogs?filters[category]='+categoryname+'&populate=*')
  }

  getBlogDetailById( id:number){
    return this.http.get(this.apiUrl + '/api/blogs?filters[id]='+id+'&populate=*')
  }
}
