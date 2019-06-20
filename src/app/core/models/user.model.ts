export interface User {
  login: string;
  id: string;
  avatar_url: string;
  url: string;
  followers_url: string;
  email: string;
  followers: User[];
}
