"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const prisma_1 = require("../lib/prisma");
//test commit
exports.authController = {
    async register(req, res) {
        try {
            const { email, phone, country, role } = req.body;
            // Basic validation
            if (!email && !phone) {
                return res.status(400).json({
                    success: false,
                    message: "Email or phone number is required",
                });
            }
            if (!country) {
                return res.status(400).json({
                    success: false,
                    message: "Country is required",
                });
            }
            if (!role || !["INDIVIDUAL", "CORPORATE"].includes(role)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid account type",
                });
            }
            // Call service to create user
            const user = await auth_service_1.authService.register({
                email,
                phone,
                country,
                role,
            });
            return res.status(201).json({
                success: true,
                message: "Account created successfully",
                data: { user },
            });
        }
        catch (error) {
            if (error.message === "EMAIL_EXISTS") {
                return res.status(409).json({
                    success: false,
                    message: "An account with this email already exists",
                });
            }
            if (error.message === "PHONE_EXISTS") {
                return res.status(409).json({
                    success: false,
                    message: "An account with this phone number already exists",
                });
            }
            console.error("Register error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
    async login(req, res) {
        try {
            const { emailOrPhone } = req.body;
            if (!emailOrPhone) {
                return res.status(400).json({
                    success: false,
                    message: "Email or phone number is required",
                });
            }
            const result = await auth_service_1.authService.login({ emailOrPhone });
            // Store token in httpOnly cookie (more secure than localStorage)
            res.cookie("token", result.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
            });
            return res.status(200).json({
                success: true,
                message: "Login successful",
                data: { user: result.user },
            });
        }
        catch (error) {
            if (error.message === "INVALID_CREDENTIALS") {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email/phone",
                });
            }
            if (error.message === "ACCOUNT_SUSPENDED") {
                return res.status(403).json({
                    success: false,
                    message: "Your account has been suspended. Please contact support.",
                });
            }
            console.error("Login error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
    async getMe(req, res) {
        try {
            const user = await prisma_1.prisma.user.findUnique({
                where: { id: req.user.userId },
                select: {
                    id: true,
                    email: true,
                    phone: true,
                    country: true,
                    role: true,
                    kycStatus: true,
                    createdAt: true,
                },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            return res.status(200).json({
                success: true,
                data: { user },
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    },
    async logout(req, res) {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });
        return res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    },
};
