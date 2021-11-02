export type Code = string;

export interface TokenRequestValue {
  code: string;
}

export interface TokenResponse {
  data: {
    access_token: string;
  };
}
