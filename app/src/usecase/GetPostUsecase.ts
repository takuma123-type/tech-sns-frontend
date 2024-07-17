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
      if (!response || !response.code) {
        throw new Error('No post found in the response');
      }
      const post = new PostItem({
        code: response.code, // APIレスポンスからcodeを取得
        avatar_url: response.avatar_url,
        name: response.name,
        tags: response.tags,
        content: response.content,
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