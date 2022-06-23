import { PostsService } from 'services/posts-service';
import { autoinject } from 'aurelia-framework';
import { Post } from 'interfaces/post';

@autoinject
export class Posts {
  posts: Post[]= [];
  constructor(private postsService: PostsService){
    this.getAll();
  }

  async getAll(): Promise<void>{
    this.posts = await this.postsService.getAll()
  }
}
