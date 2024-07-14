import axios from "axios";
import { API } from "../API";
import { PostItem } from "../../models/presentation/PostItem";
import { axiosClient } from "../axiosClient";

export class PostsRepository {
  async fetch(): Promise<{ results: PostItem[] }> {
    try {
      const response = await axios.get(API.createURL(API.URL.posts()), {
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
