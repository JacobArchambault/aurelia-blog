import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
  
export class App {
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = "Creed's blog";
    config.options.pushState = true;
    config.map([
      { route: ['', '/posts'],   moduleId: PLATFORM.moduleName('elements/posts/posts'), title: "posts" },
      { route: '/posts/1',   moduleId: PLATFORM.moduleName('elements/post-detail/post-detail'), title: "post" },
    ]);
  }
}
