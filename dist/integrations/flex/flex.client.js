"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flexClient = void 0;
const axios_1 = __importDefault(require("axios"));
const flex_config_1 = require("./flex.config");
class FlexClient {
    constructor() {
        this.token = null;
        this.tokenExpiry = null;
        this.axiosInstance = axios_1.default.create({
            baseURL: flex_config_1.flexConfig.baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    // 🔐 Check if token expired
    isTokenValid() {
        if (!this.token || !this.tokenExpiry)
            return false;
        return Date.now() < this.tokenExpiry;
    }
    // 🔑 Fetch new token
    async fetchToken() {
        const response = await this.axiosInstance.get("/tokens", {
            params: {
                clientId: flex_config_1.flexConfig.clientId,
                clientSecret: flex_config_1.flexConfig.clientSecret,
            },
        });
        const { access_token, expires_in } = response.data;
        this.token = access_token;
        // store expiry (with buffer)
        this.tokenExpiry = Date.now() + (expires_in - 60) * 1000;
        return this.token;
    }
    // 🔁 Get valid token
    async getToken() {
        if (this.isTokenValid())
            return this.token;
        return await this.fetchToken();
    }
    /** Used by Flex integrations that need Bearer + custom headers (STK, etc.). */
    async getAccessToken() {
        return await this.getToken();
    }
    // 🌐 Generic request wrapper
    async request(method, url, data, params) {
        const token = await this.getToken();
        const response = await this.axiosInstance.request({
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
    async getRawToken() {
        const response = await this.axiosInstance.get("/tokens", {
            params: {
                clientId: flex_config_1.flexConfig.clientId,
                clientSecret: flex_config_1.flexConfig.clientSecret,
            },
        });
        return response.data;
    }
}
exports.flexClient = new FlexClient();
