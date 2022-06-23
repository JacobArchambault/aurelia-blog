import { PostsService } from 'services/posts-service';
import { autoinject } from 'aurelia-framework';

@autoinject
export class Posts {
  posts: string[]= [];
  constructor(private postsService: PostsService){
    this.getAll();
  }

  async getAll(): Promise<void>{
    this.posts = await this.postsService.getAll()
  }
}
