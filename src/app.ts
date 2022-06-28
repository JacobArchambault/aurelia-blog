import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";

export class App {

  configureRouter(config: RouterConfiguration): void {
    config.title = "Creed's blog";
    config.options.pushState = true;
    config.map([
      { route: ['',], moduleId: PLATFORM.moduleName('index.html'), title: "Home" },
      { route: ['/posts'], moduleId: PLATFORM.moduleName('elements/posts/posts'), title: "Posts" },
      { route: '/posts/:id', moduleId: PLATFORM.moduleName('elements/post-detail/post-detail'), title: "Post", name: 'posts' },
    ]);
  }
}
