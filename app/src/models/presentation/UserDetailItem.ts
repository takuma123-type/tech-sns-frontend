export class UserDetailItem {
  code: string;
  avatar_url: string;
  name: string;
  tags: string[];

  constructor(params: { code: string; avatar_url: string; name: string; tags: string[]}) {
    this.code = params.code;
    this.avatar_url = params.avatar_url;
    this.name = params.name;
    this.tags = params.tags;
  }
}
