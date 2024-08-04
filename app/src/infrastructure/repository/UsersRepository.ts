import axios from "axios";
import { API } from "../API";
import { UserDetailItem } from "../../models/presentation/UserDetailItem";

export class UsersRepository {
  async get(): Promise<UserDetailItem> {
    try {
      const token = sessionStorage.getItem('authToken'); // トークンを取得
      const url = API.createURL(API.URL.userDetails());
      console.log(`Fetching user details from URL: ${url}`);
      
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // トークンをヘッダーに含める
        },
      });

      if (response.status === 200) {
        return response.data.user;
      } else {
        console.warn('Non-200 status code:', response.status);
        return new UserDetailItem({ code: "", avatar_url: "", name: "", description: "" });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 404) {
          console.error('User not found (404):', error);
        } else {
          console.error('Error in UsersRepository fetch:', error);
        }
      } else {
        console.error('Unexpected error:', error);
      }
      return new UserDetailItem({ code: "", avatar_url: "", name: "", description: "" });
    }
  }
}
