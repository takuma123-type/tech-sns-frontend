import { UsersRepository } from '../infrastructure/repository/UsersRepository';
import { UserDetailItem } from '../models/presentation/UserDetailItem';

export class GetUserDetailOutput {
  readonly user: UserDetailItem;

  constructor(params: { user: UserDetailItem }) {
    this.user = params.user;
  }
}

export class GetUserDetailUsecase {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async get(code: string): Promise<GetUserDetailOutput> {
    try {
      const response = await this.usersRepository.get(code);
      if (!response || !response.results || response.results.length === 0) {
        throw new Error('No user found in the response');
      }
      const userDetail = response.results[0];
      const user = new UserDetailItem({
        code: userDetail.code,
        avatar_url: userDetail.avatar_url,
        name: userDetail.name,
        tags: userDetail.tags,
      });
      return new GetUserDetailOutput({
        user: user,
      });
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }
}