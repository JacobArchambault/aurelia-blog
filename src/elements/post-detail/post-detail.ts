import { inject } from 'aurelia-framework';
import { Post } from 'interfaces/post';
import { PostsService } from 'services/posts-service';

@inject(PostsService)
export class PostDetail {
    private post: Post;

    constructor(private postsService: PostsService) { }

    private async activate(params): Promise<void> {
        await this.postsService.getById(params.id)
            .then(post=> this.post = post);
    }
}
