import { Component, input, model, computed, effect, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import Tags from "./tags/tags.component";

import { BlogInfo } from "../../services/blogs.service";

@Component({
  selector: "search-sub-menu",
  imports: [Tags, ReactiveFormsModule],
  templateUrl: "searchsubmenu.component.html",
  styleUrl: "searchsubmenu.component.css",
  host: {
    "class": "submenu",
    "[class.active]": "true",
  }
})
export default class SearchSubMenu {
  blogInfoArray = input<Array<BlogInfo>>();

  filteredBlogs = model<Array<number>>();
  tags!: Array<string>;
  activeTags: any = signal([]);

  searchTerm = new FormControl("");
  searchTermSignal = signal("");

  filterBlogs = computed(
    () => this.blogInfoArray()!.filter(
      blog => {
        const activeTags = this.activeTags().filter((tag: any) => tag.active);

        if(!blog.title.toLowerCase().includes(this.searchTermSignal().toLowerCase()))
          return false;

        let includeTheBlog = true;
        activeTags.forEach((tag: any) => {
          if(!blog.tags.includes(tag.tagName)){
            includeTheBlog = false;
          }
        });
        return includeTheBlog;
      }
    )
  )

  constructor() {
    effect(()=> {
      this.filteredBlogs.set(this.filterBlogs().reduce((blogs: Array<number>, blog) => [...blogs, blog.id], [] ))
    })
  }
  ngOnInit(){
    this.tags = Array.from(new Set(this.blogInfoArray()!.reduce((tags:Array<string>, blog) => [...tags, ...blog.tags], [])))
  }
  onInput (){
    const newValue = this.searchTerm.value;
    this.searchTermSignal.set(newValue ? newValue : "");
  }
}
