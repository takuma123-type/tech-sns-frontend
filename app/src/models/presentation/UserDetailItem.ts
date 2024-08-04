export class UserDetailItem {
  code: string;
  avatar_url: string;
  name: string;
  description: string;

  constructor(params: { code: string; avatar_url: string; name: string; description: string }) {
    this.code = params.code;
    this.avatar_url = params.avatar_url;
    this.name = params.name;
    this.description = params.description
  }
}
