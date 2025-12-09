import { Injectable, ElementRef, signal  } from "@angular/core";

@Injectable({providedIn: "root"})
export class ScrollbarModelData {
  elementRef?: ElementRef;
  windowHeight = signal(0);
  windowWidth = signal(0);
  elementHeight = signal(0);
  scrollPercentage = signal(0);

  getWindowHeight(){
    return window.innerHeight;
  }
  getWindowWidth(){
    return window.innerWidth
  }
  getElementHeight(){
    return this.elementRef?.nativeElement.getBoundingClientRect().height;
  }
  getHeaderHeight(): number{
    const headerHeight = window.document.querySelector("app-menu")?.getBoundingClientRect().height;
    if(headerHeight === window.innerHeight || headerHeight === undefined){
      return 0;
    }
    else return headerHeight;
  }
  updateScrollPercentage(event: WheelEvent){
    event.preventDefault();
    const deltaPercentage = 0.1;
    if(event.deltaY > 0)
      this.scrollPercentage.update(cur => ( cur + deltaPercentage ) >= 1 ? 1 : ( cur + deltaPercentage ));
    else
      this.scrollPercentage.update(cur => ( cur - deltaPercentage ) <= 0 ? 0 : ( cur - deltaPercentage ));
  }
  setScrollPercentage(topValue: number) {
    const percentageValue = (topValue)/(this.getElementHeight()-(this.getWindowHeight()-this.getHeaderHeight()));
    this.scrollPercentage.update(
      cur => ( cur + percentageValue ) <= 0 ? 0 :
        ( cur + percentageValue ) >= 1 ? 1 :
          ( cur + percentageValue )
    );

  }
  setElementRef(ref: ElementRef) {
    this.elementRef = ref;
  }
}
