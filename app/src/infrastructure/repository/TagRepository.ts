import axios from "axios";
import { API } from "../API";
import { TagItem } from "../../models/presentation/TagItem";

export class TagsRepository {
  async fetch(): Promise<{ results: TagItem[] }> {
    try {
      const response = await axios.get(API.createURL(API.URL.tags()), {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (response.status === 200) {
        return { results: response.data };
      } else {
        console.warn('Non-200 status code:', response.status);
        return { results: [] };
      }
    } catch (error) {
      console.error('Error in PostsRepository fetch:', error);
      return { results: [] };
    }
  }
}
