import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent  {
  getblogs: any;
  allblogData: any[] = [];
  constructor(private strapiservice: StrapiService, private toast: ToastrService) {

  }
  ngOnInit() {
    this.getBlogs();
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
}
