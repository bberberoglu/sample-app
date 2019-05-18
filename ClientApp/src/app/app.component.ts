import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LoadModuleDirective} from './modules/load/load.module';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild(LoadModuleDirective) appLoadModule: LoadModuleDirective;
  Menu = [];
  component: {
    appLoadModule: '',
    appLoadModuleComponent: ''
  };

  constructor(private appService: AppService) {
  }

  handleMenuClick(item) {
    this.component = item;
  }

  ngOnInit(): void {
    this.appService.getMenu().subscribe((data) => {
      this.Menu = data;
      console.log(data);
    });
  }

  ngOnDestroy(): void {
  }
}
