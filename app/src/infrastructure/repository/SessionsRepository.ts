import axios from "axios";
import { API } from "../API";

export class SessionsRepository {
  async sign_up(signUpData: { email: string; password: string }): Promise<{ token: string }> {
    try {
      const response = await axios.post(API.createURL(API.URL.sign_up()), signUpData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (response.status === 201) { // ステータスコード201を考慮
        return { token: response.data.token };
      } else {
        console.warn('Non-201 status code:', response.status);
        return { token: "" };
      }
    } catch (error) {
      console.error('Error in SessionsRepository sign_up:', error);
      return { token: "" };
    }
  }

  async update_profile(updateProfileData: FormData): Promise<{ token: string }> {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No auth token found");
      }

      const response = await axios.put(API.createURL(API.URL.update_profile()), updateProfileData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${token}`
        },
      });
      if (response.status === 200) {
        return { token: response.data.token };
      } else {
        console.warn('Non-200 status code:', response.status);
        return { token: "" };
      }
    } catch (error) {
      console.error('Error in SessionsRepository update_profile:', error);
      return { token: "" };
    }
  }
}
