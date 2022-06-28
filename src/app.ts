import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Creed's blog";
    config.options.pushState = true;
    config.map([
      { route: ['',], moduleId: PLATFORM.moduleName('index'), title: "Home" },
      { route: ['/posts'], moduleId: PLATFORM.moduleName('elements/posts/posts'), title: "Posts" },
      { route: '/posts/:id', moduleId: PLATFORM.moduleName('elements/post-detail/post-detail'), title: "Post", name: 'posts' },
    ]);
  }
}
