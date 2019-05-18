import {BrowserModule} from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoadModuleDirective} from './modules/load/load.module';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {AppService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    LoadModuleDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader},
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
