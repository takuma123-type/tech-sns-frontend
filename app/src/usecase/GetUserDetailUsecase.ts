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

  async get(): Promise<GetUserDetailOutput> {
    try {
      const userDetail = await this.usersRepository.get();
      if (!userDetail) {
        throw new Error('No user found in the response');
      }
      return new GetUserDetailOutput({ user: userDetail });
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }
}
