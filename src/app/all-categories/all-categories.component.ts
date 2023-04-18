import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent {
  mydata: any[] =[];
  apiUrl = environment.apiUrl;

  constructor(private route: ActivatedRoute, private router: Router, private http: StrapiService) {}

  getcategory:any;
  category: any
  ngOnInit(): void {
    this.categories();
  }

  categories() {
    this.http.getCategoryData().subscribe(category_data => {
      console.log(category_data,'data')
      this.category = category_data;
      Object.values(this.category.data).filter(x=>{
        console.log(x,'x');
        this.mydata.push(x);
      })
    }
    );
    console.log(this.mydata);
  }
}
