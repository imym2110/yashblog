import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StrapiService } from '../services/strapi.service';


@Component({
	selector: 'app-strapi-table',
	templateUrl: './strapi-table.component.html',
	styleUrls: ['./strapi-table.component.scss']
})
export class StrapiTableComponent implements OnInit {
	@Input() strapitable: any;
	// id:any

	constructor(private strapiservice: StrapiService, private toast: ToastrService, private router: Router) { }

	ngOnInit() {
		console.log(this.strapitable, 'strapitable-data');
		//	console.log(this.strapitable.id);
	}

	deleteBlogItem(blogid: number) {
		console.log(blogid)
		
		if ((confirm("Delete this Record?")) && blogid) {
			this.strapiservice.deleteBlog(blogid).subscribe(() => {
				this.toast.success('record deleted')
				window.location.reload();
			});
		}
	}

	updateBlogItem(blogid: number) {
		console.log(blogid);
		if (blogid) {
			this.router.navigate(['edit', blogid])
		}
	}
}
