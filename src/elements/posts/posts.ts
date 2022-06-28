import { PostsService } from 'services/posts-service';
import { autoinject } from 'aurelia-framework';
import { Post } from 'interfaces/post';

@autoinject
export class Posts {
  posts: Post[] = [];
  selectedPostId: number = 0;
  constructor(private postsService: PostsService) { }

  async created(): Promise<void> {
    await this.postsService.getAll().then(posts => this.posts = posts);
  }

  select(post) {
    this.selectedPostId = post.id;
  }
}
