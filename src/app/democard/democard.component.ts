import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StrapiService } from '../services/strapi.service';


@Component({
  selector: 'app-democard',
  templateUrl: './democard.component.html',
  styleUrls: ['./democard.component.scss'],
  providers: [DatePipe]
})
export class DemocardComponent implements OnInit{
  apiUrl = environment.apiUrl;
  myDate = new Date();
  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private router: Router, private http: StrapiService) {
    this.datePipe.transform(this.myDate, 'dd/mm/yyyy');
    //console.log(this.myDate);
  }
  @Input() demoblogsdata : any

  ngOnInit(){
    console.log(this.demoblogsdata, "demo-data");
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


}
