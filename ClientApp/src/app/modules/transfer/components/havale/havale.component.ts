import { Component, OnInit } from "@angular/core";
import { TransferService } from "../../services/transfer.service";

@Component({
  selector: "transfer-havale",
  templateUrl: "./havale.component.html",
  styleUrls: ["./havale.component.css"]
})
export class HavaleComponent implements OnInit {
  constructor(private transferService: TransferService) {}

  ngOnInit() {}
}
