import { Component, inject, computed, ElementRef, afterEveryRender, Renderer2, ChangeDetectorRef, signal, WritableSignal } from "@angular/core";


import SearchSubMenu from "../../components/searchSubMenu/searchsubmenu.component";
import Cards from "../../components/cards/cards.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import { ScrollbarModelData } from "../../components/scrollbar/scrollbar.service";

import BlogData, { Blog } from "../../services/blogs.service";
import { BlogInfo } from "../../services/blogs.service";

@Component({
  selector: "blogs-route",
  imports: [SearchSubMenu, Cards, Scrollbar],
  templateUrl: "BlogsRoute.component.html",
  styleUrl: "BlogsRoute.component.css",
  host: {
    class: "route",
    "(wheel)": "this.scrollbarModel.updateScrollPercentage($event)",
    "(pointerdown)": "onPointerDown($event)",
    "(pointerup)": "onPointerUp($event)",
    "(pointerleave)": "onPointerLeave($event)",
  }
})
export default class BlogsRoute {
  data = inject(BlogData);
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

  scrollbarModel = inject(ScrollbarModelData);
  scrollPosition = computed(() => {
    return -this.scrollbarModel.scrollPercentage()*(this.scrollbarModel.elementHeight()-(this.scrollbarModel.getWindowHeight()-this.scrollbarModel.getHeaderHeight()))
  });

  constructor (private ref: ChangeDetectorRef, private el: ElementRef, private renderer: Renderer2){
    this.scrollbarModel.setElementRef(inject(ElementRef));
    this.data.getBlogs().then(
      blogs => {
        const result = blogs.map((blog: Blog) => ({ blog_ID: blog.blog_ID, title: blog.title, img: blog.img, date_created: blog.date_created, written_by: blog.written_by, tags: blog.tags, short_description: blog.short_description }));
        this.data.emptyBlog = result.shift();
        this.blogInfo.set(result);
      })

    afterEveryRender(() =>{
      this.scrollbarModel.windowWidth.set(this.scrollbarModel.getWindowWidth());
      this.scrollbarModel.windowHeight.set(this.scrollbarModel.getWindowHeight());
      this.scrollbarModel.elementHeight.set(this.scrollbarModel.getElementHeight());
    })
  }

  private pointerDownCleanUp?: () => void;
  onPointerDown(e: PointerEvent) {
    this.pointerDownCleanUp = this.renderer.listen(
      this.el.nativeElement,
      "pointermove",
      (pointerEvent) => {
        const startingPoint = e.clientY;
        const deltaPosition = startingPoint - pointerEvent.clientY;
        this.scrollbarModel.setScrollPercentage(deltaPosition/10);
      }
    )
  }
  onPointerUp(e: PointerEvent) {
    if(this.pointerDownCleanUp)
      this.pointerDownCleanUp();
  }
  onPointerLeave(e: PointerEvent) {
    if(this.pointerDownCleanUp)
      this.pointerDownCleanUp();
  }
}
