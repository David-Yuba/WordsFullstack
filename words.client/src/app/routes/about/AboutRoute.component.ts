import { Component, ElementRef, Renderer2, WritableSignal, signal } from "@angular/core";

import NavSubMenu from "../../components/navSubMenu/navsubmenu.component";
import DesktopNavSubMenu from "../../components/desktopNavSubMenu/navsubmenu.component";
import Blog from "../../components/blog/blog.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import RouteComponent from "../route/route.component";

import { BlogSection } from "../../services/blogs.service";

@Component({
  selector: "about-route",
  imports: [ NavSubMenu, DesktopNavSubMenu, Blog, Scrollbar ],
  templateUrl: "AboutRoute.component.html",
  styleUrl: "AboutRoute.component.css"
})
export default class AboutRoute extends RouteComponent {
  blogContentObject: WritableSignal<Array<BlogSection>> = signal([]);

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer)

    this.data.getBlogById(1).then((blog) => {
      this.blogContentObject.set(this.data._getBlogObjectContent(blog));
    });
  }
}
