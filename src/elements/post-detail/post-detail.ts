import { inject } from 'aurelia-framework';
import { Post } from 'interfaces/post';
import { PostsService } from 'services/posts-service';

@inject(PostsService)
export class PostDetail {
     post: Post;

    constructor(private postsService: PostsService) { }

    async activate(params): Promise<Post> {
        return this.postsService.getById(params.id)
            .then(post=> this.post = post);
    }
}
