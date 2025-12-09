import { ChangeDetectorRef, Component, computed, input, Renderer2 } from "@angular/core";

@Component({
  selector: "scrollbar",
  templateUrl: "./scrollbar.component.html",
  styleUrl: "./scrollbar.component.css",
  host: {
    "[style.--scrollbar-height]": "`${scrollbarHeight()}px`",
    "[style.--scrollbar-thumb-height]": "`${scrollbarHeight()*scrollbarHeight()/elementHeight()}px`",
    "[style.--scroll-percentage]": "scrollPercentage()",
    "[style.--header-height]": "`${headerHeight()}px`",
    "[style.display]": "shouldDisplay()"
  }
})
export default class Scrollbar {
  scrollbarHeight = input(0);
  elementHeight = input(0);
  scrollPercentage = input(0);
  headerHeight = input(0);
  shouldDisplay = computed(() => this.elementHeight() <= window.innerHeight ? "none" : "block");

  constructor (ref: ChangeDetectorRef, renderer: Renderer2) {
    renderer.listen(window, "resize",() => {
      ref.markForCheck()
    });
  }
}
