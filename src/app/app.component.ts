import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DirectionsComponent } from "./directions/directions.component";

@Component({
  selector: "peh-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  /**
   * Contains the elevation of `mat-toolbar`
   */
  elevationState: Boolean = false;

  /**
   * Colspans, Rowspan, background images
   */
  data: [{}] = [
    {
      cols: 2,
      rows: 2,
      background: "../assets/gallery/9.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/1.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/2.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/3.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/6.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/7.jpg"
    },
    {
      cols: 1,
      rows: 1,
      background: "../assets/gallery/8.jpg"
    },
    {
      cols: 1,
      rows: 2,
      background: "../assets/gallery/10.jpg"
    },
    {
      cols: 1,
      rows: 2,
      background: "../assets/gallery/4.jpg"
    },
    {
      cols: 1,
      rows: 2,
      background: "../assets/gallery/5.jpg"
    },
    {
      cols: 2,
      rows: 2,
      background: "../assets/gallery/9.jpg"
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    addEventListener("scroll", this.changeElevation);
  }

  changeElevation(): void {
    this.elevationState = scrollY > 1 ? true : false;
  }

  openDirectionsDialog() {
    const dialog = this.dialog.open(DirectionsComponent);
  }
}
