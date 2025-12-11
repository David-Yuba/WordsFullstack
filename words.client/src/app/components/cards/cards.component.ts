import { Component, input } from "@angular/core";

import Card from "./card/card.component";

import { BlogInfo } from "../../services/blogs.service";

@Component({
  selector: "cards",
  imports: [ Card ],
  templateUrl: "cards.component.html",
  styleUrl: "cards.component.css"
})
export default class Cards {
  cardData = input<Array<BlogInfo>>();
}
