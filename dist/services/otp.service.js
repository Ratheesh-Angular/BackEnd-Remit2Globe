"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpService = void 0;
const prisma_1 = require("../lib/prisma");
const email_service_1 = require("./email.service");
exports.otpService = {
    /**
     * Generate a 6-digit OTP code
     */
    generateOtpCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    },
    /**
     * Create and send OTP for email verification
     */
    async sendEmailOtp(userId, email) {
        try {
            // Generate OTP
            const code = this.generateOtpCode();
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
            // Delete any existing unverified OTPs for this user and type
            await prisma_1.prisma.otp.deleteMany({
                where: {
                    userId,
                    type: "EMAIL",
                    verified: false,
                },
            });
            // Create new OTP record
            await prisma_1.prisma.otp.create({
                data: {
                    userId,
                    type: "EMAIL",
                    code,
                    expiresAt,
                    verified: false,
                },
            });
            // Send email
            await email_service_1.emailService.sendOtpEmail(email, code, 10);
            console.log(`Email OTP sent to ${email} for user ${userId}`);
        }
        catch (error) {
            console.error("Error sending email OTP:", error);
            throw new Error("Failed to send email verification code");
        }
    },
    /**
     * Create and send OTP for phone verification
     */
    async sendPhoneOtp(userId, phone) {
        try {
            // Generate OTP
            const code = this.generateOtpCode();
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
            // Delete any existing unverified OTPs for this user and type
            await prisma_1.prisma.otp.deleteMany({
                where: {
                    userId,
                    type: "PHONE",
                    verified: false,
                },
            });
            // Create new OTP record
            await prisma_1.prisma.otp.create({
                data: {
                    userId,
                    type: "PHONE",
                    code,
                    expiresAt,
                    verified: false,
                },
            });
            // TODO: Send SMS using your SMS provider
            // await smsService.sendOtp(phone, code);
            // For now, just log it (REMOVE THIS IN PRODUCTION)
            console.log(`Phone OTP for ${phone}: ${code}`);
            console.log(`SMS OTP sent to ${phone} for user ${userId}`);
        }
        catch (error) {
            console.error("Error sending phone OTP:", error);
            throw new Error("Failed to send phone verification code");
        }
    },
    /**
     * Verify email OTP code
     */
    async verifyEmailOtp(userId, code) {
        try {
            // Find the OTP record
            const otpRecord = await prisma_1.prisma.otp.findFirst({
                where: {
                    userId,
                    type: "EMAIL",
                    code,
                    verified: false,
                    expiresAt: {
                        gt: new Date(), // Not expired
                    },
                },
            });
            if (!otpRecord) {
                return false; // Invalid or expired code
            }
            // Mark OTP as verified
            await prisma_1.prisma.otp.update({
                where: { id: otpRecord.id },
                data: { verified: true },
            });
            // Update user's email verification status
            await prisma_1.prisma.user.update({
                where: { id: userId },
                data: { emailVerified: true },
            });
            console.log(`Email verified for user ${userId}`);
            return true;
        }
        catch (error) {
            console.error("Error verifying email OTP:", error);
            return false;
        }
    },
    /**
     * Verify phone OTP code
     */
    async verifyPhoneOtp(userId, code) {
        try {
            // Find the OTP record
            const otpRecord = await prisma_1.prisma.otp.findFirst({
                where: {
                    userId,
                    type: "PHONE",
                    code,
                    verified: false,
                    expiresAt: {
                        gt: new Date(), // Not expired
                    },
                },
            });
            if (!otpRecord) {
                return false; // Invalid or expired code
            }
            // Mark OTP as verified
            await prisma_1.prisma.otp.update({
                where: { id: otpRecord.id },
                data: { verified: true },
            });
            // Update user's phone verification status
            await prisma_1.prisma.user.update({
                where: { id: userId },
                data: { phoneVerified: true },
            });
            console.log(`Phone verified for user ${userId}`);
            return true;
        }
        catch (error) {
            console.error("Error verifying phone OTP:", error);
            return false;
        }
    },
    /**
     * Check if both email and phone are verified
     */
    async checkVerificationStatus(userId) {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                emailVerified: true,
                phoneVerified: true,
            },
        });
        return {
            emailVerified: user?.emailVerified || false,
            phoneVerified: user?.phoneVerified || false,
        };
    },
    /**
     * Resend OTP (with rate limiting)
     */
    async resendOtp(userId, type, contact) {
        // Check if user recently requested an OTP (rate limiting)
        const recentOtp = await prisma_1.prisma.otp.findFirst({
            where: {
                userId,
                type,
                createdAt: {
                    gt: new Date(Date.now() - 60 * 1000), // Within last 60 seconds
                },
            },
        });
        if (recentOtp) {
            throw new Error("Please wait 60 seconds before requesting a new code");
        }
        // Send new OTP
        if (type === "EMAIL") {
            await this.sendEmailOtp(userId, contact);
        }
        else {
            await this.sendPhoneOtp(userId, contact);
        }
    },
};
