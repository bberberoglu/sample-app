import { Component, OnInit } from "@angular/core";
import { PaymentService } from "../../services/payment.service";

@Component({
  selector: "payment-fatura",
  templateUrl: "./fatura.component.html",
  styleUrls: ["./fatura.component.css"]
})
export class FaturaComponent implements OnInit {
  constructor(private paymentService: PaymentService) {}

  ngOnInit() {}
}
