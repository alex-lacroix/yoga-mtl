import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { OfferedServicesComponent } from "./offered-services/offered-services.component";
import { InvestingComponent } from "./investing/investing.component";
import { TestimonyComponent } from "./testimony/testimony.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    OfferedServicesComponent,
    InvestingComponent,
    TestimonyComponent,
    ContactComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
