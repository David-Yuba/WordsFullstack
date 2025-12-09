import { Component,input } from "@angular/core";

import { Blog } from "../../../services/blogs.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "card",
  templateUrl: "card.component.html",
  styleUrl: "card.component.css",
  imports: [RouterLink]
})
export default class Card {
  data = input<Blog>();
}
