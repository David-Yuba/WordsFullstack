import { Component, ElementRef, Renderer2, signal, WritableSignal } from "@angular/core";

import NavSubMenu from "../../components/navSubMenu/navsubmenu.component";
import DesktopNavSubMenu from "../../components/desktopNavSubMenu/navsubmenu.component";
import Blog from "../../components/blog/blog.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import RouteComponent from "../route/route.component";

import { BlogSection } from "../../services/blogs.service";

@Component({
  selector: "home-route",
  imports: [ NavSubMenu, DesktopNavSubMenu, Blog, Scrollbar ],
  templateUrl: "HomeRoute.component.html",
  styleUrl: "HomeRoute.component.css",
})
export default class HomeRoute extends RouteComponent {
  blogContentObject: WritableSignal<Array<BlogSection>> = signal([]);

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);

    this.data.getBlogById(0).then((blog) => {
      this.blogContentObject.set(this.data._getBlogObjectContent(blog));
    });
  }
}
