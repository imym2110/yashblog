import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from '../services/strapi.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent {
  apiUrl = environment.apiUrl;
  getcategories: any;
  allCategoryData: any[] = [];

  constructor(private strapiservice: StrapiService, private toast: ToastrService, private router: Router) {

  }

  ngOnInit(){
    this.getCategories()
  }

  getCategories(){
    this.strapiservice.getCategoryData().subscribe(res => {
      this.getcategories = res;
      Object.values(this.getcategories.data).filter(x => {
        this.allCategoryData.push(x);
      })
    })
  }
  deletecatgItem(catgid: number) {
		// console.log(catgid)
		
		if ((confirm("Delete this Record?")) && catgid) {
			this.strapiservice.deleteCatg(catgid).subscribe(() => {
				this.toast.success('record deleted')
				window.location.reload();
			});
		}
	}

	updateBlogItem(catgid: number) {
		// console.log(catgid);
		if (catgid) {
			this.router.navigate(['edit-category', catgid])
		}
	}
}
