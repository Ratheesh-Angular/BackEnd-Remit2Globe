export interface FlexTokenResponse {
  access_token: string;
  expires_in: number;
}

export interface FlexMD5Response {
  // depends on API response format (string or object)
  value: string;
}

/** Flex STK push request body (testbed.flex-money.tech/stkPush). */
export interface FlexStkPushRequest {
  transactionReference: string;
  msisdn: string;
  collectionAmount: number;
  paymentDesc: string;
  callbackUrl: string;
}
