import { Component, inject } from "@angular/core";
import BlogData from "../../services/blogs.service";

@Component({
  selector: "sources-route",
  templateUrl: "SourcesRoute.component.html",
  styleUrl: "SourcesRoute.component.css",
  host: {
    class: "route"
  }
})
export default class SourcesRoute {
  serverData = inject(BlogData);
  constructor() {
    this.serverData.getServerData().then((data) => {
    })
  }
}
