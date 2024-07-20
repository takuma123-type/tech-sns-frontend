import axios from "axios";
import { API } from "../API";
import { NotFoundError, UnauthorizedError, UnknownError, BadRequestError, FailSignUpError, FailUpdateProfileError } from "./errors";

export class SessionsRepository {
  async sign_up(signUpData: { email: string; password: string }): Promise<{ token: string }> {
    try {
      const response = await axios.post(API.createURL(API.URL.sign_up()), signUpData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (response.status === 201) {
        return { token: response.data.token };
      } else {
        console.warn('Non-201 status code:', response.status);
        return { token: "" };
      }
    } catch (error: unknown) {
      console.error('Error in SessionsRepository sign_up:', error);

      if (axios.isAxiosError(error)) {
        const { status } = error.response!;
        if (status === 400) {
          throw new BadRequestError('Invalid request');
        } else if (status === 401) {
          throw new UnauthorizedError('Unauthorized');
        } else if (status === 404) {
          throw new NotFoundError('Not Found');
        } else {
          throw new UnknownError('An unknown error occurred');
        }
      }

      throw new FailSignUpError('Failed to sign up');
    }
  }

  async log_in(signInData: { email: string; password: string }): Promise<{ token: string }> {
    try {
      const response = await axios.post(API.createURL(API.URL.log_in()), signInData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); // トークンをlocalStorageに保存
        console.log('Token saved to localStorage:', token);
        return { token };
      } else {
        console.warn('Non-200 status code:', response.status);
        return { token: "" };
      }
    } catch (error: unknown) {
      console.error('Error in SessionsRepository log_in:', error);
  
      if (axios.isAxiosError(error)) {
        const { status } = error.response!;
        if (status === 400) {
          throw new BadRequestError('Invalid request');
        } else if (status === 401) {
          throw new UnauthorizedError('Unauthorized');
        } else if (status === 404) {
          throw new NotFoundError('Not Found');
        } else {
          throw new UnknownError('An unknown error occurred');
        }
      }
  
      throw new FailSignUpError('Failed to sign in');
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
    } catch (error: unknown) {
      console.error('Error in SessionsRepository update_profile:', error);

      if (axios.isAxiosError(error)) {
        const { status } = error.response!;
        if (status === 400) {
          throw new BadRequestError('Invalid request');
        } else if (status === 401) {
          throw new UnauthorizedError('Unauthorized');
        } else if (status === 404) {
          throw new NotFoundError('Not Found');
        } else {
          throw new UnknownError('An unknown error occurred');
        }
      }

      throw new FailUpdateProfileError('Failed to update profile');
    }
  }

  async log_out(query: { token: string }): Promise<void> {
    console.log('log_out called with token:', query.token);
    try {
      const response = await axios.delete(API.createURL(API.URL.log_out()), {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${query.token}`
        },
      });
      if (response.status === 204) {
        console.log('log_out successful with status 204');
        return;
      } else {
        console.warn('Non-204 status code:', response.status);
        return;
      }
    } catch (error: unknown) {
      console.error('Error in SessionsRepository log_out:', error);
  
      if (axios.isAxiosError(error)) {
        const { status } = error.response!;
        if (status === 400) {
          throw new BadRequestError('Invalid request');
        } else if (status === 401) {
          throw new UnauthorizedError('Unauthorized');
        } else if (status === 404) {
          throw new NotFoundError('Not Found');
        } else {
          throw new UnknownError('An unknown error occurred');
        }
      }
  
      throw new UnknownError('Failed to log out');
    }
  }  
}
