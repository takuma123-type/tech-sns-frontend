export class API {
  private static BASE_PATH = "/api";

  public static URL = {
    posts: () => `${this.BASE_PATH}/posts`,
    post: (code: string) => `${this.BASE_PATH}/posts/${code}`,
    sign_up: () => `${this.BASE_PATH}/sessions/sign_up`,
    update_profile: () => `${this.BASE_PATH}/sessions/update_profile`,
  };
  public static createURL(url: string): string {
    return `${process.env.REACT_APP_API_BASE_URL}${url}`;
  }
}