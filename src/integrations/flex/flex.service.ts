import { flexClient } from "./flex.client";
import { flexConfig } from "./flex.config";
import { generateTimestamp, generateMD5 } from "./flex.utils";

// 🔹 Optional: MD5 (only if required by specific APIs)
export const generateFlexMD5 = () => {
  const timestamp = generateTimestamp();

  const md5 = generateMD5(
    flexConfig.userCode,
    timestamp,
    flexConfig.rawPassword,
  );

  return { timestamp, md5 };
};

// 🔹 Example: Generic GET call
export const getFlexData = async () => {
  return await flexClient.request("GET", "/some-endpoint");
};

// 🔹 Example: Generic POST call
export const postFlexData = async (payload: any) => {
  return await flexClient.request("POST", "/some-endpoint", payload);
};

// ✅ Get Countries
export const getFlexCountries = async () => {
  const timestamp = generateTimestamp();

  const md5 = generateMD5(
    flexConfig.userCode,
    timestamp,
    flexConfig.rawPassword,
  );

  const token = await flexClient["getToken"](); // use internal token

  const response = await fetch(`${flexConfig.baseURL}/countries`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "x-userId": flexConfig.userCode,
      "x-password": md5,
      "x-timestamp": timestamp,
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data;
};
