import { Component, OnInit } from "@angular/core";
import { TransferService } from "../../services/transfer.service";

@Component({
  selector: "transfer-eft",
  templateUrl: "./eft.component.html",
  styleUrls: ["./eft.component.css"]
})
export class EftComponent implements OnInit {
  constructor(private transferService: TransferService) {}

  ngOnInit() {}
}
