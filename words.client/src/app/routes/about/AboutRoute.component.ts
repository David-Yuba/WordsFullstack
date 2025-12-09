import { Component, inject, ElementRef, afterEveryRender, computed, Renderer2 } from "@angular/core";

import NavSubMenu from "../../components/navSubMenu/navsubmenu.component";
import DesktopNavSubMenu from "../../components/desktopNavSubMenu/navsubmenu.component";
import Blog from "../../components/blog/blog.component";
import Scrollbar from "../../components/scrollbar/scrollbar.component";
import { ScrollbarModelData } from "../../components/scrollbar/scrollbar.service";

import BlogData from "../../services/blogs.service";

@Component({
  selector: "about-route",
  imports: [ NavSubMenu, DesktopNavSubMenu, Blog, Scrollbar ],
  templateUrl: "AboutRoute.component.html",
  styleUrl: "AboutRoute.component.css",
  host: {
    class: "route",
    "(wheel)": "this.scrollbarModel.updateScrollPercentage($event)",
    "(click)": "onHeadingClick($event)",
    "(pointerdown)": "onPointerDown($event)",
    "(pointerup)": "onPointerUp($event)",
    "(pointerleave)": "onPointerLeave($event)",
  }
})
export default class AboutRoute {
  blogData = inject(BlogData);

  scrollbarModel = inject(ScrollbarModelData);
  scrollPosition = computed(() => {
    return -this.scrollbarModel.scrollPercentage()*(this.scrollbarModel.elementHeight()-(this.scrollbarModel.getWindowHeight()-this.scrollbarModel.getHeaderHeight()))
  });
  headerPositions?: Array<number>;

  constructor (private el: ElementRef, private renderer: Renderer2){
    this.scrollbarModel.setElementRef(inject(ElementRef));

    afterEveryRender(() =>{
      this.scrollbarModel.windowWidth.set(this.scrollbarModel.getWindowWidth());
      this.scrollbarModel.windowHeight.set(this.scrollbarModel.getWindowHeight());
      this.scrollbarModel.elementHeight.set(this.scrollbarModel.getElementHeight());
      this.headerPositions = this.setHeaderPositions();
    })
  }


  setHeaderPositions() {
    const headers = Array.from(window.document.querySelectorAll(".blog>*"));

    return headers.map(header => header.getBoundingClientRect().top);
  }

  onHeadingClick(event: MouseEvent){
    event.stopPropagation()
    let index = Number((event.target as HTMLElement).dataset["pos"]);
    if(index && this.headerPositions){
      const padding = 16;
      const headerHeight = this.scrollbarModel.getHeaderHeight();
      const offset = (headerHeight === 0) ? padding : headerHeight;
      const position = this.headerPositions[index] - offset;
      this.scrollbarModel.setScrollPercentage(position);

      const targetHeading = window.document.querySelectorAll("blog>*")[index];
      this.renderer.setStyle(targetHeading, "color", "var(--highlighted-heading)");
      setTimeout(()=> {
        this.renderer.setStyle(targetHeading, "color", "var(--font-color)");
      }, 1000)
    }
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
