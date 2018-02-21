export class User {
  username: string;
  email: string;
  password: string;
  accessToken: string;
  type: 'employer' | 'seeker';
  image: string;
}
