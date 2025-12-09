import { Component, input, model } from "@angular/core";

@Component({
  selector: "open-menu-icon",
  templateUrl: "menuicon.component.html",
  styleUrl: "menuicon.component.css",
  host: {
    "(click)": "onClick()"
  }
})
export default class OpenMenuIcon {
  iconName = input<string>();
  open = model<boolean>(false);

  onClick(){
    this.open.update(current => !current);
  }
}
