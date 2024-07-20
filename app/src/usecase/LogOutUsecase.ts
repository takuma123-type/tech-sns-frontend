import {
  InvalidParameterError,
  FailSignUpError,
  UnauthorizedError
} from "../infrastructure/repository/errors";
import { SessionsRepository } from "../infrastructure/repository/SessionsRepository";

export class LogOutInput {
  readonly token: string;

  constructor(params: { token: string }) {
    this.token = params.token;
  }
}

export class LogOutOutput {
  readonly success: boolean;

  constructor(params: { success: boolean }) {
    this.success = params.success;
  }
}

export class LogOutUsecase {
  readonly input: LogOutInput;
  private sessionRepository: SessionsRepository;

  constructor(
    input: LogOutInput,
    sessionRepository: SessionsRepository
  ) {
    this.input = input;
    this.sessionRepository = sessionRepository;
  }

  async log_out(): Promise<LogOutOutput> {
    if (!this.validInput(this.input)) {
      return Promise.reject(new InvalidParameterError());
    }

    try {
      await this.sessionRepository.log_out({
        token: this.input.token
      });

      return new LogOutOutput({ success: true });

    } catch (error) {
      if (error instanceof UnauthorizedError) {
        throw new FailSignUpError(error.message);
      }
      return Promise.reject(new FailSignUpError());
    }
  }

  private validInput(input: LogOutInput): boolean {
    return !!input.token;
  }
}