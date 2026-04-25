"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpController = void 0;
const otp_service_1 = require("../services/otp.service");
const email_service_1 = require("../services/email.service");
const prisma_1 = require("../lib/prisma");
const jwt_utils_1 = require("../utils/jwt.utils");
exports.otpController = {
    /**
     * Verify email OTP
     */
    async verifyEmailOtp(req, res) {
        try {
            const { userId, code } = req.body;
            if (!userId || !code) {
                return res.status(400).json({
                    success: false,
                    message: "User ID and verification code are required",
                });
            }
            if (code.length !== 6 || !/^\d+$/.test(code)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid verification code format",
                });
            }
            const verified = await otp_service_1.otpService.verifyEmailOtp(userId, code);
            if (!verified) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired verification code",
                });
            }
            return res.status(200).json({
                success: true,
                message: "Email verified successfully",
            });
        }
        catch (error) {
            console.error("Email OTP verification error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
    /**
     * Verify phone OTP
     */
    async verifyPhoneOtp(req, res) {
        try {
            const { userId, code } = req.body;
            if (!userId || !code) {
                return res.status(400).json({
                    success: false,
                    message: "User ID and verification code are required",
                });
            }
            if (code.length !== 6 || !/^\d+$/.test(code)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid verification code format",
                });
            }
            const verified = await otp_service_1.otpService.verifyPhoneOtp(userId, code);
            if (!verified) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid or expired verification code",
                });
            }
            // Check if both email and phone are now verified
            const status = await otp_service_1.otpService.checkVerificationStatus(userId);
            const fullyVerified = status.emailVerified && status.phoneVerified;
            let passwordSetupToken;
            if (fullyVerified) {
                const userRow = await prisma_1.prisma.user.findUnique({
                    where: { id: userId },
                    select: { email: true, passwordHash: true },
                });
                if (userRow && !userRow.passwordHash) {
                    passwordSetupToken = (0, jwt_utils_1.generatePasswordSetupToken)(userId);
                }
                // Send welcome email
                if (userRow?.email) {
                    try {
                        await email_service_1.emailService.sendWelcomeEmail(userRow.email, "User");
                    }
                    catch (error) {
                        console.error("Failed to send welcome email:", error);
                    }
                }
            }
            return res.status(200).json({
                success: true,
                message: "Phone verified successfully",
                data: {
                    fullyVerified,
                    passwordSetupToken,
                },
            });
        }
        catch (error) {
            console.error("Phone OTP verification error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
    /**
     * Resend OTP
     */
    async resendOtp(req, res) {
        try {
            const { userId, type } = req.body;
            if (!userId || !type) {
                return res.status(400).json({
                    success: false,
                    message: "User ID and type are required",
                });
            }
            if (!["EMAIL", "PHONE"].includes(type)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid type. Must be EMAIL or PHONE",
                });
            }
            // Get user contact info
            const user = await prisma_1.prisma.user.findUnique({
                where: { id: userId },
                select: { email: true, phone: true },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            const contact = type === "EMAIL" ? user.email : user.phone;
            if (!contact) {
                return res.status(400).json({
                    success: false,
                    message: `No ${type.toLowerCase()} associated with this account`,
                });
            }
            await otp_service_1.otpService.resendOtp(userId, type, contact);
            return res.status(200).json({
                success: true,
                message: "Verification code resent successfully",
            });
        }
        catch (error) {
            if (error.message.includes("wait")) {
                return res.status(429).json({
                    success: false,
                    message: error.message,
                });
            }
            console.error("Resend OTP error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
    /**
     * Get verification status
     */
    async getVerificationStatus(req, res) {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.status(400).json({
                    success: false,
                    message: "User ID is required",
                });
            }
            const status = await otp_service_1.otpService.checkVerificationStatus(userId);
            return res.status(200).json({
                success: true,
                data: status,
            });
        }
        catch (error) {
            console.error("Get verification status error:", error);
            return res.status(500).json({
                success: false,
                message: "Something went wrong. Please try again.",
            });
        }
    },
};
