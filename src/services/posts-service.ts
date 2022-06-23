import { autoinject } from 'aurelia-framework';
import { HttpClient } from "aurelia-fetch-client";

@autoinject
export class PostsService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/posts/";

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
}
