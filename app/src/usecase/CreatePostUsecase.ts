import { UnauthorizedError, InvalidParameterError } from '../infrastructure/repository/errors';
import { PostsRepository } from '../infrastructure/repository/PostsRepository';
import { PostCreateItem } from '../models/presentation/PostCreateItem';

export class CreatePostOutput {
  readonly code: string;

  constructor(params: { code: string }) {
    this.code = params.code;
  }
}

export class CreatePostUsecase {
  readonly input: PostCreateItem;
  private postsRepository: PostsRepository;

  constructor(input: PostCreateItem, postsRepository: PostsRepository) {
    this.input = input;
    this.postsRepository = postsRepository;
  }

  async create(token: string): Promise<CreatePostOutput> {
    if (!this.validInput(this.input)) {
      return Promise.reject(new InvalidParameterError());
    }
    try {
      const result = await this.postsRepository.create({
        content: this.input.content,
        tags: this.input.tags,
      }, token);
      return new CreatePostOutput({ code: result.code });
    } catch (error) {
      if (error instanceof UnauthorizedError) {
        throw new UnauthorizedError('Unauthorized access - invalid token');
      }
      console.error('Error in CreatePostUsecase create:', error);
      throw new Error('Failed to create post');
    }
  }

  private validInput(input: PostCreateItem): boolean {
    return !!input.content && input.tags.length > 0;
  }
}