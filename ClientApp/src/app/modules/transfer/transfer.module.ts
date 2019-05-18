import {NgModule} from '@angular/core';
import {HavaleComponent} from './components/havale/havale.component';
import {EftComponent} from './components/eft/eft.component';
import {TransferService} from './services/transfer.service';

@NgModule({
  declarations: [HavaleComponent, EftComponent],
  imports: [],
  providers: [TransferService],
  bootstrap: [HavaleComponent, EftComponent]
})
export class TransferModule {
}
