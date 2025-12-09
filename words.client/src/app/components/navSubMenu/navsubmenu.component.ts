import { Component, input } from "@angular/core";
import { NgClass } from "@angular/common";

import OpenMenuIcon from "../menu/mobileComponents/menuicon.component";

import { BlogSection, ElementType } from "../../services/blogs.service";

@Component({
  selector: "nav-sub-menu",
  imports: [OpenMenuIcon, NgClass],
  templateUrl: "navsubmenu.component.html",
  styleUrl: "navsubmenu.component.css",
  host: {
    "class": "submenu"
  }
})
export default class NavSubMenu {
  supportedElements = ElementType;
  open = false;
  blogContent = input<Array<BlogSection>>();
}
