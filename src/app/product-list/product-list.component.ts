import { Component, OnInit } from "@angular/core";
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  constructor() {}

  products = products;
  share() {
    alert("Product has been shared.");
  }
  onNotify() {
    window.alert("You will be notifyed when product goes on sale");
  }
}
