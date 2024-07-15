import {
  InvalidParameterError,
  FailUpdateProfileError,
  UnauthorizedError
} from "../infrastructure/repository/errors";
import { SessionsRepository } from "../infrastructure/repository/SessionsRepository";

export class UpdateProfileInput {
  readonly name: string;
  readonly avatar: File | null;
  readonly description: string;

  constructor(params: { name: string; avatar: File | null; description: string }) {
    this.name = params.name;
    this.avatar = params.avatar;
    this.description = params.description;
  }
}

export class UpdateProfileOutput {
  readonly token: string;

  constructor(params: { token: string }) {
    this.token = params.token;
  }
}

export class UpdateProfileUsecase {
  readonly input: UpdateProfileInput;
  private sessionsRepository: SessionsRepository;

  constructor(
    input: UpdateProfileInput,
    sessionsRepository: SessionsRepository
  ) {
    this.input = input;
    this.sessionsRepository = sessionsRepository;
  }

  async update_profile(): Promise<UpdateProfileOutput> {
    if (!this.validInput(this.input)) {
      return Promise.reject(new InvalidParameterError());
    }

    const formData = new FormData();
    formData.append("name", this.input.name);
    formData.append("description", this.input.description);
    if (this.input.avatar) {
      formData.append("avatar", this.input.avatar);
    }

    try {
      const response = await this.sessionsRepository.update_profile(formData);

      // プロフィール更新成功時のトークンを取得
      const token = response.token;
      return new UpdateProfileOutput({ token });

    } catch (error) {
      if (error instanceof UnauthorizedError) {
        console.log(error);
        throw new FailUpdateProfileError(error.message);
      }
      return Promise.reject(new FailUpdateProfileError());
    }
  }

  private validInput(input: UpdateProfileInput): boolean {
    return !!input.name && !!input.description;
  }
}
