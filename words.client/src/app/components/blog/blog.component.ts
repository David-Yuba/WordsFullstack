import { Component, input } from "@angular/core";

import { BlogSection, ElementType } from "../../services/blogs.service";
@Component({
  selector: "blog",
  templateUrl: "blog.component.html",
  styleUrl: "blog.component.css",
  host: {
    class: "blog",
  }
})
export default class Blog {
  supportedElements = ElementType;
  blogContent = input<Array<BlogSection>>();
}
