import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  onClick(){
    var currentScroll =  document.body.scrollTop;
    window.scrollTo(0, currentScroll);
  }
}
