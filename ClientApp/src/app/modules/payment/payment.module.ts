import { NgModule } from "@angular/core";
import { FaturaComponent } from "./components/fatura/fatura.component";
import { PaymentService } from "./services/payment.service";

@NgModule({
  declarations: [FaturaComponent],
  imports: [],
  providers: [PaymentService],
  bootstrap: [FaturaComponent]
})
export class PaymentModule {}
