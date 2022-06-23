import {RouterConfiguration, Router} from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";
  
export class App {
  configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Routing demo';
    config.options.pushState = true;
    config.map([
      { route: ['', '/posts'],   moduleId: PLATFORM.moduleName('elements/posts/posts'), title: "Creed's blog" },
    ]);
  }
}
