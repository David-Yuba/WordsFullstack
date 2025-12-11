import { Component, model, inject } from "@angular/core";
import { NgClass } from "@angular/common";
import BlogData, { Blog, Blogs } from "../../../services/blogs.service";

@Component({
  selector: "tags",
  templateUrl: "./tags.component.html",
  styleUrl: "./tags.component.css",
  imports: [NgClass],
})
export default class Tags {
  data = inject(BlogData)
  tagsArray = Array<string>;
  tagsModel = model<Array<{tagName: string, active: boolean}>>();

  ngOnInit() {
    this.data.getBlogs().then((data: Blogs) => {
      const tags = new Set(data.map(data => data.tags).reduce((endingArray, startingArray) => [...endingArray, ...startingArray], []));
      const result = Array.from(tags).map((tag: string) => ({ tagName: tag, active: false }))
      this.tagsModel.set(result);
    })
  }

  onTagClick(event: MouseEvent){
    const target = Number((event.target as HTMLElement).dataset["index"]);
    this.tagsModel.update(prev => {
      let updated: Array<{tagName: string, active: boolean}>= [];
      for(let i = 0 ; i < prev!.length ; i++){
        if(i === target){
          updated.push({tagName: prev![i].tagName, active: !(prev![i].active)});
        }
        else updated.push({tagName: prev![i].tagName, active: prev![i].active});
      }
      return updated;
    })
  }
}
