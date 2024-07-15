export class API {
  private static BASE_PATH = "/api";

  public static URL = {
    posts: () => `${this.BASE_PATH}/posts`,
    post: (code: string) => `${this.BASE_PATH}/posts/${code}`,
  };
  public static createURL(url: string): string {
    return `${process.env.REACT_APP_API_BASE_URL}${url}`;
  }
}