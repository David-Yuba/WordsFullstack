import { Component, input, model } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "tags",
  templateUrl: "./tags.component.html",
  styleUrl: "./tags.component.css",
  imports: [NgClass],
})
export default class Tags {
  tagsArray = input<Array<string>>();
  tagsModel = model<Array<{tagName: string, active: boolean}>>();

  ngOnInit(){
    this.tagsModel.set(this.tagsArray()!.map((tag) => ({tagName: tag, active: false})));
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
