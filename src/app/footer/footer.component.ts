import { Component } from '@angular/core';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mydata: any[] =[];
  category: any;
  userCount : object | undefined;
  constructor(private strapiservice:StrapiService){

  }
  ngOnInit(){
    this.categories();
    this.getUserCount();
  }
  
  onClick(){
    var currentScroll =  document.body.scrollTop;
    window.scrollTo(0, currentScroll);
  }
  getUserCount(){
    this.strapiservice.getUserCount().subscribe(x=>{   
      // console.log(x);
      this.userCount = x;  
    })
  }
  categories() {
    this.strapiservice.getCategoryData().subscribe(category_data => {
      //  console.log(category_data,'data')
      this.category = category_data;
      // Object.values(this.category.data).filter((x : any)=>{
      //   // console.log(x,'x');
      //   this.mydata.push(x);
      // })
    }
    );
    // console.log(this.mydata);
  }
}
