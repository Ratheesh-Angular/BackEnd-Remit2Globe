"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
function errorMiddleware(err, _req, res, _next) {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: err.message ?? 'Internal server error',
    });
}
