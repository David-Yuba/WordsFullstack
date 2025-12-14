import { Component, inject, ElementRef, Renderer2, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import NavSubMenu from "../../components/navSubMenu/navsubmenu.component";
import DesktopNavSubMenu from "../../components/desktopNavSubMenu/navsubmenu.component";
import Blog from "../../components/blog/blog.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import RouteComponent from "../route/route.component";

import { BlogSection } from "../../services/blogs.service";

@Component({
  selector: "blog-route",
  imports: [ NavSubMenu, DesktopNavSubMenu, Blog, Scrollbar ],
  templateUrl: "BlogRoute.component.html",
  styleUrl: "BlogRoute.component.css"
})
export default class BlogRoute extends RouteComponent {
  readonly blogId: number;
  blogContent: WritableSignal<Array<BlogSection>> = signal([]);

  private route = inject(ActivatedRoute)

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer)
    this.blogId = Number(this.route.snapshot.paramMap.get("id"));

    this.data.getBlogById(this.blogId).then((blog) => {
      this.blogContent.set(this.data._getBlogObjectContent(blog))
      this.isLoading.set(false);
    })
  }
}
