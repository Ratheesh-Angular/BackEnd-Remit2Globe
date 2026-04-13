export interface FlexTokenResponse {
  access_token: string;
  expires_in: number;
}

export interface FlexMD5Response {
  // depends on API response format (string or object)
  value: string;
}
