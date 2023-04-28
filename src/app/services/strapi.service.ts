import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private route: Router) { }

  // page = Number of entities to return (default: 25);  
  // isfeatured = you can return boolean value
  // categoryName = Pass Category name

  getBlogData() {
    return this.http.get(this.apiUrl + '/api/blogs?populate=*')
  }

  getAllBlog(page: any) {
    return this.http.get(this.apiUrl + '/api/blogs?sort=id:desc&pagination[limit]=' + page + '&populate=*')
  }

  getCategoryData() {
    return this.http.get(this.apiUrl + '/api/categories?populate=*')
  }

  getselectedcategory(page: any) {
    return this.http.get(this.apiUrl + '/api/categories?pagination[limit]=' + page + '&populate=*')
  }

  getAllFeaturedBlog(isfeatured: boolean) {
    return this.http.get(this.apiUrl + '/api/blogs?filters[isfeatured]=' + isfeatured + '&populate=*')
  }

  getFeaturedBlog(page: any, isfeatured: boolean) {
    return this.http.get(this.apiUrl + '/api/blogs?pagination[limit]=' + page + '&filters[isfeatured]=' + isfeatured + '&populate=*')
  }

  getBlogByCategory(page: any, categoryname: string) {
    return this.http.get(this.apiUrl + '/api/blogs?pagination[limit]=' + page + '&filters[categories][category_title][$eq]=' + categoryname + '&populate=*')
  }

  getAllBlogByCatg(categoryname: string) {
    return this.http.get(this.apiUrl + '/api/blogs?filters[categories][category_title][$eq]=' + categoryname + '&populate=*')
  }

  getAllBlogByCatgID(cat_id: number) {
    return this.http.get(this.apiUrl + '/api/blogs?filters[categories][id][$eq]=' + cat_id + '&populate=*')
  }

  getBlogDetailById(id: number) {
    return this.http.get(this.apiUrl + '/api/blogs?filters[id]=' + id + '&populate=*')
  }

  getDynamicForm() {
    return this.http.get(this.apiUrl + '/api/content-type-builder/content-types')
  }

  getImage(id:number){
    return this.http.get(this.apiUrl + '/api/upload/files/'+id)
  }

  addBlogForm(temp: any) {
    // console.log(temp, 'Inservice')
    const url = this.apiUrl + '/api/blogs';
    const body =
    {
      "data": {
        "title": temp.title,
        "summary": temp.summary,
        "description": temp.description,
        "isfeatured": temp.featradio,
        "categories": [
          temp.categories
        ],
        "image" : temp.image,
      }
    }
    //  console.log(body, 'Safety')
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    // console.log(body, "Service")
    return this.http.post(url, body);
  }

  addCatgform(temp:any){
    const url = this.apiUrl + '/api/categories/';
    const body =
    {
      "data" : {
        "category_title" : temp.category_title,
        "category_image" : temp.category_image
      }
    }
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });  
    return this.http.post(url, body);
  }


  getUser(test: any) {
    const url = this.apiUrl + '/api/auth/local';
    const user =
    {
      "identifier": test.username,
      "password": test.password
    }
    return this.http.post(url, user);
  }

  registerUser(reg: any) {
    const url = this.apiUrl + '/api/auth/local/register';
    const new_user =
    {
      "username": reg.username,
      "email": reg.email,
      "password": reg.password
    }
    return this.http.post(url, new_user);
  }

  deleteBlog(id: any) {
    return this.http.delete(this.apiUrl + '/api/blogs/' + id)
  }

  deleteCatg(id:any){
    return this.http.delete(this.apiUrl + '/api/categories/' + id)
  }

  editBlog(temp: any, id: any) {
    // console.log(temp, 'Inservice')
    const url = this.apiUrl + '/api/blogs/' + id;
    const body =
    {
      "data": {
        "title": temp.title,
        "summary": temp.summary,
        "description": temp.description,
        "isfeatured": temp.featradio,
        "categories": [
          temp.categories
        ],
        "image" : temp.image,
      }
    }
    // console.log(body, 'Safety')
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    // console.log(body, "Service")
    return this.http.put(url, body);
  }


  editCatg(temp: any, id: any) {
    // console.log(temp, 'Inservice')
    const url = this.apiUrl + '/api/categories/' + id;
    const body =
    {
      "data": {
        "id": temp.id,
        "category_title": temp.category_title,
        "category_image": temp.category_image
      }
    }
    // console.log(body, 'Safety')
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    // console.log(body, "Service")
    return this.http.put(url, body);
  }

  fileupload(temp:any){
    return this.http.post(this.apiUrl + '/api/upload',temp)
    // console.log(temp, 'TTEET')
    // const url = this.apiUrl + '/api/upload';
    // const body =
    // {
     
    //     "files": temp,
      
    // }
    // // console.log(body, 'Safety')
    // const headers = new Headers(
    //   {
    //     'Content-Type': 'application/json'
    //   });
    // // console.log(body, "Service")
    // return this.http.post(url, body);
  }

  upload(file: any): Observable<any> {
    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('files', file, file.name);

    // Make http post request over api
    // with formData as req
    
    return this.http.post(this.apiUrl + '/api/upload/', formData);
  }

  
}
