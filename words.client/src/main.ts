import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/_root/app.config';
import { App } from './app/_root/app.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
