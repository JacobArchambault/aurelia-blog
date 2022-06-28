import { autoinject } from 'aurelia-framework';
import { HttpClient } from "aurelia-fetch-client";
import { Post } from 'interfaces/post';

@autoinject
export class PostsService {
  private baseUrl: string = "https://jsonplaceholder.typicode.com/posts/";

  constructor(private readonly httpClient: HttpClient) {
    httpClient.configure(config => {
      config
        .withBaseUrl(this.baseUrl)
        .withDefaults({
          headers: {
            Accept: 'application/json',
          },
        });
    });
  }

  public async getAll(): Promise<Post[]> {
    return await this.httpClient.fetch("")
      .then((res) => res.json())
      .then(res => { return res as Post[] });
  }

  public async getById(id: string): Promise<Post> {
    return await this.httpClient.fetch(id)
      .then((res) => res.json())
      .then(res => { return res as Post });
  }
}
