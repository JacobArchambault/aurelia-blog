import { autoinject } from 'aurelia-framework';
import { CommentsService } from './../../services/comments-service';
import { Post } from 'interfaces/post';
import { PostsService } from 'services/posts-service';
import { Comment } from 'interfaces/comment';
@autoinject
export class PostDetail {
    private post: Post;
    private comments: Comment[];

    constructor(private postsService: PostsService, private commentsService: CommentsService) { }

    private async activate(params): Promise<void> {
        await this.postsService.getById(params.id)
            .then(post=> this.post = post);
        await this.commentsService.getByPostId(params.id)
        .then(comments => this.comments = comments);
    }
}
