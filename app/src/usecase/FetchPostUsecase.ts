import { PostsRepository } from "../infrastructure/repository/PostsRepository";
import { PostItem } from "../models/presentation/PostItem";

export class FetchPostsOutput {
  readonly posts: PostItem[];

  constructor(params: { posts: PostItem[] }) {
    this.posts = params.posts;
  }
}

export class FetchPostsUsecase {
  private postsRepository: PostsRepository;

  constructor(postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async fetch(): Promise<FetchPostsOutput> {
    try {
      const response = await this.postsRepository.fetch();
      if (!response.results || response.results.length === 0) {
        throw new Error('No results found in the response');
      }
      const posts = response.results.map(
        (post: any) =>
          new PostItem({
            code: post.code,
            avatar_url: post.avatar_url,
            name: post.name,
            tags: post.tags,
            content: post.content,
          })
      );
      return new FetchPostsOutput({
        posts: posts || [],
      });
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }
}
