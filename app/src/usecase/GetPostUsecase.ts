import { PostsRepository } from '../infrastructure/repository/PostsRepository';
import { PostItem } from '../models/presentation/PostItem';

export class GetPostOutput {
  readonly post: PostItem;

  constructor(params: { post: PostItem }) {
    this.post = params.post;
  }
}

export class GetPostUsecase {
  private postsRepository: PostsRepository;

  constructor(postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async get(code: string): Promise<GetPostOutput> {
    try {
      const response = await this.postsRepository.get(code);
      if (!response || !response.post) {
        throw new Error('No post found in the response');
      }
      const post = new PostItem({
        code, // Assuming code is not included in the API response
        avatar_url: response.post.avatar_url,
        name: response.post.name,
        tags: response.post.tags,
        content: response.post.content,
      });
      return new GetPostOutput({
        post: post,
      });
    } catch (error) {
      console.error('Error getting post:', error);
      throw error;
    }
  }
}
