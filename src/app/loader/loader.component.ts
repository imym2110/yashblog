import { Component } from "@angular/core";
import { LoaderService } from "../services/loader.service";


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  show: boolean | undefined;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.loadState.subscribe(res => {
      this.show = res;
    });
  }
}
