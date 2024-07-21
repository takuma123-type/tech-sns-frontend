import { TagsRepository } from "../infrastructure/repository/TagRepository";
import { TagItem } from "../models/presentation/TagItem";

export class FetchTagsOutput {
  readonly tags: TagItem[];

  constructor(params: { tags: TagItem[] }) {
    this.tags = params.tags;
  }
}

export class FetchTagsUsecase {
  private tagsRepository: TagsRepository;

  constructor(tagsRepository: TagsRepository) {
    this.tagsRepository = tagsRepository;
  }

  async fetch(): Promise<FetchTagsOutput> {
    try {
      const response = await this.tagsRepository.fetch();
      if (!response.results || response.results.length === 0) {
        throw new Error('No results found in the response');
      }
      const tags = response.results.map(
        (tag: any) =>
          new TagItem({
            name: tag.name,
          })
      );
      return new FetchTagsOutput({
        tags: tags,
      });
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }
}