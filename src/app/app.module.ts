import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../environments/environment";

import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Ng material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatListModule,
  MatGridListModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { DirectionsComponent } from "./directions/directions.component";
import { DescriptionComponent } from "./description/description.component";

@NgModule({
  declarations: [AppComponent, DirectionsComponent, DescriptionComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DirectionsComponent]
})
export class AppModule {}
