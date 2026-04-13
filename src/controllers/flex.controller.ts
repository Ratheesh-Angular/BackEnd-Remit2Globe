import { Request, Response } from "express";
import { flexClient } from "../integrations/flex/flex.client";
import { generateFlexMD5 } from "../integrations/flex/flex.service";
import { getFlexCountries } from "../integrations/flex/flex.service";
// ✅ Test Token
export const getFlexTokenController = async (req: Request, res: Response) => {
  try {
    const data = await flexClient.getRawToken();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Token Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

// ✅ Test MD5
export const getFlexMD5Controller = async (req: Request, res: Response) => {
  try {
    const data = generateFlexMD5();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("MD5 Error:", error.message);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// ✅ Generic API tester
export const testFlexProtectedAPI = async (req: Request, res: Response) => {
  try {
    // replace with actual endpoint later
    const data = await flexClient.request("GET", "/");

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Flex API Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

export const getFlexCountriesController = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = await getFlexCountries();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Countries Error:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};
