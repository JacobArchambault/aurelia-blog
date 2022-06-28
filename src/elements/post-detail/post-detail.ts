import { inject } from 'aurelia-framework';
import { Post } from 'interfaces/post';
import { PostsService } from 'services/posts-service';

@inject(PostsService)
export class PostDetail {
     post: Post;

    constructor(private postsService: PostsService) { }

    activate(params, routeConfig) {
        return this.postsService.getById(params.id)
            .then(post=> this.post = post);
    }
}
