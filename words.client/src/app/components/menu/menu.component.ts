import { Component, model } from "@angular/core";
import { RouterLink } from "@angular/router";

import OpenMenuIcon from "./mobileComponents/menuicon.component";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-menu",
  templateUrl: "menu.component.html",
  styleUrl: "menu.component.css",
  imports: [RouterLink, OpenMenuIcon, NgClass],
  host: {
    class: "menu"
  }
})
export default class AppMenu {
  theme = model<boolean>();
  setingsOpen = false;
  menuOpen = false;

  updateTheme() {
    this.theme.update(currentTheme => !currentTheme);
  }
}
