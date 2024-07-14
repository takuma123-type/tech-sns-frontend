export class PostItem {
  readonly code: string;
  readonly avatar_url: string;
  readonly name: string;
  readonly tags: string[];
  readonly content: string;

  constructor(params: {
    code: string
    avatar_url: string;
    name: string;
    tags: string[];
    content: string;
  }) {
    this.code = params.code;
    this.avatar_url = params.avatar_url;
    this.name = params.name;
    this.tags = params.tags;
    this.content = params.content;
  }
}