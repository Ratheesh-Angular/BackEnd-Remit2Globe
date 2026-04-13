import axios, { AxiosInstance } from "axios";
import { flexConfig } from "./flex.config";
import { FlexTokenResponse } from "./flex.types";

class FlexClient {
  private axiosInstance: AxiosInstance;
  private token: string | null = null;
  private tokenExpiry: number | null = null;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: flexConfig.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // 🔐 Check if token expired
  private isTokenValid(): boolean {
    if (!this.token || !this.tokenExpiry) return false;
    return Date.now() < this.tokenExpiry;
  }

  // 🔑 Fetch new token
  private async fetchToken(): Promise<string> {
    const response = await this.axiosInstance.get<FlexTokenResponse>(
      "/tokens",
      {
        params: {
          clientId: flexConfig.clientId,
          clientSecret: flexConfig.clientSecret,
        },
      },
    );

    const { access_token, expires_in } = response.data;

    this.token = access_token;

    // store expiry (with buffer)
    this.tokenExpiry = Date.now() + (expires_in - 60) * 1000;

    return this.token;
  }

  // 🔁 Get valid token
  private async getToken(): Promise<string> {
    if (this.isTokenValid()) return this.token!;

    return await this.fetchToken();
  }

  // 🌐 Generic request wrapper
  public async request<T = any>(
    method: "GET" | "POST",
    url: string,
    data?: any,
    params?: any,
  ): Promise<T> {
    const token = await this.getToken();

    const response = await this.axiosInstance.request<T>({
      method,
      url,
      data,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }

  // ➕ ADD THIS METHOD inside class
  public async getRawToken(): Promise<FlexTokenResponse> {
    const response = await this.axiosInstance.get<FlexTokenResponse>(
      "/tokens",
      {
        params: {
          clientId: flexConfig.clientId,
          clientSecret: flexConfig.clientSecret,
        },
      },
    );

    return response.data;
  }
}

export const flexClient = new FlexClient();
