import http from 'src/api/business';

const resources = 'auth';

export default class AuthApi {
  async logIn(username: string, password: string): Promise<any> {
    const result = await http.post(`${resources}/login`, {
      username,
      password,
    });
    return result.data;
  }
}
