import { Component, computed, ElementRef, Renderer2, ChangeDetectorRef, signal, WritableSignal } from "@angular/core";


import SearchSubMenu from "../../components/searchSubMenu/searchsubmenu.component";
import Cards from "../../components/cards/cards.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import RouteComponent from "../route/route.component";

import { Blog } from "../../services/blogs.service";
import { BlogInfo } from "../../services/blogs.service";

@Component({
  selector: "blogs-route",
  imports: [SearchSubMenu, Cards, Scrollbar],
  templateUrl: "BlogsRoute.component.html",
  styleUrl: "BlogsRoute.component.css"
})
export default class BlogsRoute extends RouteComponent{
  blogInfo: WritableSignal<Array<BlogInfo>> = signal([]);

  filteredBlogs = signal<Array<number>>([]);
  blogsToDisplay = computed(() => {
    return this.blogInfo().filter(
      (blog) => {
        let includeBlog = false;
        this.filteredBlogs().forEach(
          (blogId) =>{
            if(blog.blog_ID === blogId) includeBlog = true;
          });
        return includeBlog;
      }
    )
  });
 
  constructor(private ref: ChangeDetectorRef, el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
    this.data.getBlogs().then(
      blogs => {
        const result = blogs.map((blog: Blog) => ({ blog_ID: blog.blog_ID, title: blog.title, img: blog.img, date_created: blog.date_created, written_by: blog.written_by, tags: blog.tags, short_description: blog.short_description }));
        this.data.emptyBlog = result.shift();
        this.blogInfo.set(result);
        this.isLoading.set(false);
      })
  }
}
