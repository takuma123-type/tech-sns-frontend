export class API {
  private static BASE_PATH = "/api";

  public static URL = {
    posts: () => `${this.BASE_PATH}/posts`,
    post: (code: string) => `${this.BASE_PATH}/posts/${code}`,
    create_post: () => `${this.BASE_PATH}/posts`,
    tags: () => `${this.BASE_PATH}/tags`,
    sign_up: () => `${this.BASE_PATH}/sessions/sign_up`,
    log_in: () => `${this.BASE_PATH}/sessions/log_in`,
    log_out: () => `${this.BASE_PATH}/sessions/log_out`,
    update_profile: () => `${this.BASE_PATH}/sessions/update_profile`,
    user: (code: string) => `${this.BASE_PATH}/users/${code}`,
    userDetails: () => `${this.BASE_PATH}/users/details`,
  };

  public static createURL(url: string): string {
    return `${process.env.REACT_APP_API_BASE_URL}${url}`;
  }
}
