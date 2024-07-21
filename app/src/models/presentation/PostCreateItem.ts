export class PostCreateItem {
  tags: string[];
  content: string;

  constructor(params: {tags: string[]; content: string }) {
    this.tags = params.tags;
    this.content = params.content;
  }
}
