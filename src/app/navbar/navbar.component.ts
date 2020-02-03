import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scrollToContact() {
    let elem = document.getElementById("contact");
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  scrollToHome() {
    let elem = document.getElementById("home");
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  scrollToAbout() {
    let elem = document.getElementById("about");
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  scrollToServices() {
    let elem = document.getElementById("services");
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  scrollToTestimonies() {
    let elem = document.getElementById("testimony-carousel");
    elem.scrollIntoView({ block: "end", behavior: "smooth" });
  }
}
