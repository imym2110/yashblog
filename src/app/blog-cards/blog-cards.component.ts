import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../strapi.service';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.scss'],
  providers: [DatePipe]
})
export class BlogCardsComponent implements OnInit {
  data: any[] = [];
  apiUrl = environment.apiUrl;

  myDate = new Date();
  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private router: Router, private http: StrapiService) {
    this.datePipe.transform(this.myDate, 'dd/mm/yyyy');
    //console.log(this.myDate);
  }

  @Input() blogsdata: any;

  ngOnInit() {
    console.log(this.blogsdata, 'Init')
    this.initFeaturedData();
  }


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['blogsdata']) {
  //     let abc = changes;
  //     console.log(abc, 'badfuwgqfjksbjk');

  //   }
  //   else {
  //     console.log('Data not received')
  //   }
  // }


  // ngOnChanges(changes:SimpleChanges):void{

  //   if(changes['categoryChildData'])
  //   {
  //     let x = changes['categoryChildData'];
  //     console.log('abc',x)
  //   }
  // }
  initFeaturedData() {

    
  }
}


