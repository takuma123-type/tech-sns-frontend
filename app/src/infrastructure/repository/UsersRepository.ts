import axios from "axios";
import { API } from "../API";
import { UserDetailItem } from "../../models/presentation/UserDetailItem";

export class UsersRepository {
  async get(code: string): Promise<{ results: UserDetailItem[] }> {
    try {
      const response = await axios.get(API.createURL(API.URL.user(code)), {
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
      console.error('Error in UsersRepository fetch:', error);
      return { results: [] };
    }
  }
}