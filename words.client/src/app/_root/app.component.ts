import { afterEveryRender, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import AppMenu from '../components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppMenu],
  templateUrl: './app.component.html',
  styleUrls: ['./css/app.component.css', './css/variables.component.css'],
  host: {
    "[class.light-theme]": "lightTheme",
  }
})
export class App {
  lightTheme = false;
  headerHeight = signal(0);

  constructor () {
    const appRef = inject(ElementRef);
    afterEveryRender(()=> {
      this.headerHeight.set(
        appRef.nativeElement.querySelector("app-menu").getBoundingClientRect().height
      )
    })
  }
}
