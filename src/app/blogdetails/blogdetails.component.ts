import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../services/strapi.service';



@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent {
  apiUrl = environment.apiUrl;
  getblogs: any;
  allFeaturedData: any[]=[];
 // blogidFromURL: any;
  cards: any;
  cardDetails: any[]=[];

  constructor( private strapiservice: StrapiService, private activatedRoute: ActivatedRoute){}


  ngOnInit(): void{
    const currentblogid = this.activatedRoute.snapshot.params['blogid']
    // console.log(currentblogid)
    if(currentblogid == this.activatedRoute.snapshot.params['blogid'])
    {
      this.initBlogDetailDataById(currentblogid);
    }
  }

  initBlogDetailDataById(curBlogID:number)
  {
    this.strapiservice.getBlogDetailById(curBlogID).subscribe(blog => {
      this.getblogs = blog;
      Object.values(this.getblogs.data).filter(x=>{
        // console.log(x,'x');
        this.allFeaturedData.push(x)
       // this.cards = this.getblogs.data;
        // Object.values(this.cards.categories).filter(y=>{
        //   console.log(y,'y');
        //   this.allFeaturedData.push(y); 
        // })
      })
    })
  }
}
