import { inject } from 'aurelia-framework';
import { Post } from 'interfaces/post';
import { PostsService } from 'services/posts-service';

@inject(PostsService)
export class PostDetail {
     post: Post;

    constructor(private postsService: PostsService) { }

    activate(parms, routeConfig) {
        return this.postsService.getById(parms.id)
            .then(post=> this.post = post);
    }
}
