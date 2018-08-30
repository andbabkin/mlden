import {environment} from "../../environments/environment";

export const authData = {
  grant_type: 'password',
  client_id: 2,
  client_secret: 'KAP1gi5TVrTvk19SU6IJVvryENRVoB9OKtf0eTIi',
  auth_url: `${environment.apiOrigin}oauth/token`,
};
