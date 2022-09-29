import AuthApi from './resources/auth';

const businessApi: BusinessApi = {
  auth: new AuthApi(),
};

export default businessApi;

export interface BusinessApi {
  auth: AuthApi;
}
