import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

interface AccessToken {
  access_token: string;
  scope: string;
  token_type: string;
}

@Injectable()
export class AuthService {
  getAccessToken(code: string): Promise<AxiosResponse<AccessToken>> {
    return axios.post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_secret: 'c13bf1c2cd1eaf7cff5da0ca14d8ec18422b11f6',
        client_id: 'ba184875d493b572d832',
      },
      {
        headers: {
          accept: 'application/json',
        },
      },
    );
  }
}
