export class PostItem {
  code: string;
  avatar_url: string;
  name: string;
  tags: string[];
  content: string;

  constructor(params: { code: string; avatar_url: string; name: string; tags: string[]; content: string }) {
    this.code = params.code;
    this.avatar_url = params.avatar_url;
    this.name = params.name;
    this.tags = params.tags;
    this.content = params.content;
  }
}

// PostItemにisNewプロパティを追加した新しい型
export interface PostItemWithIsNew extends PostItem {
  isNew?: boolean;
}
