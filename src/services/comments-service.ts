import { autoinject } from 'aurelia-framework';
import { HttpClient } from "aurelia-fetch-client";
import { Comment } from 'interfaces/comment';

@autoinject
export class CommentsService {

  constructor(private readonly httpClient: HttpClient) {
    httpClient.configure(config => {
      config
        .withBaseUrl("https://jsonplaceholder.typicode.com/posts/")
        .withDefaults({
          headers: {
            Accept: 'application/json',
          },
        });
    });
  }

  public async getByPostId(postId: string): Promise<Comment[]> {
    return await this.httpClient.fetch(`${postId}/comments`)
      .then((res) => res.json())
      .then(res => { return res as Comment[] });
  }
}
