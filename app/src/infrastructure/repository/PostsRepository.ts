import axios from "axios";
import { API } from "../API";
import { PostItem } from "../../models/presentation/PostItem";

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

  async get(code: string): Promise<{
    content: string;
    tags: string[];
    name: string;
    avatar_url: string;
    code: any; post: PostItem 
}> {
    try {
      const response = await axios.get(API.createURL(API.URL.post(code)), {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn('Non-200 status code:', response.status);
        throw new Error('Non-200 status code');
      }
    } catch (error) {
      console.error('Error in PostsRepository get:', error);
      throw error;
    }
  }

  async create(postData: { content: string; tags: string[] }, token: string): Promise<{ code: string }> {
    try {
      const response = await axios.post(API.createURL(API.URL.create_post()), postData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${token}`, // トークンをヘッダーに追加
        },
      });
      if (response.status === 201) {
        return { code: response.data.code };
      } else {
        console.warn('Non-201 status code:', response.status);
        return { code: "" };
      }
    } catch (error) {
      console.error('Error in PostsRepository create:', error);
      return { code: "" };
    }
  }
}