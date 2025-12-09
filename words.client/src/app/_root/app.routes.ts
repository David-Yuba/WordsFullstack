import { Routes } from '@angular/router';

import HomeRoute from '../routes/home/HomeRoute.component';
import AboutRoute from '../routes/about/AboutRoute.component';
import BlogsRoute from '../routes/blogs/BlogsRoute.component';
import SourcesRoute from '../routes/sources/SourcesRoute.component';
import BlogRoute from '../routes/blog/BlogRoute.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeRoute
  },
  {
    path: "about",
    component: AboutRoute
  },
  {
    path: "blogs",
    component: BlogsRoute
  },
  {
    path: "sources",
    component: SourcesRoute
  },
  {
    path: "blog/:id",
    component: BlogRoute
  }
/* ,
  {
    path: "**",
    component: ErrorPage,
  } */
  ];
