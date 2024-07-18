export class SignUpItem {
  readonly email: string;
  readonly password: string;

  constructor(params: {
    email: string;
    password: string;
  }) {
    this.email = params.email;
    this.password = params.password;
  }
}