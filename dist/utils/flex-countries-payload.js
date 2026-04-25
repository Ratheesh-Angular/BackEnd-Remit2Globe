"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractCountryRows = extractCountryRows;
exports.setCountryRowsInPayload = setCountryRowsInPayload;
function extractCountryRows(flexJson) {
    if (!flexJson || typeof flexJson !== "object")
        return [];
    const d = flexJson;
    const inner = d.data;
    if (inner && typeof inner === "object" && "data" in inner) {
        const arr = inner.data;
        if (Array.isArray(arr))
            return arr;
    }
    if (Array.isArray(d.data)) {
        return d.data;
    }
    return [];
}
function setCountryRowsInPayload(flexJson, newRows) {
    if (!flexJson || typeof flexJson !== "object")
        return flexJson;
    const d = flexJson;
    if (d.data && typeof d.data === "object" && "data" in d.data) {
        const inner = d.data;
        return {
            ...d,
            data: { ...inner, data: newRows },
        };
    }
    if (Array.isArray(d.data)) {
        return { ...d, data: newRows };
    }
    return flexJson;
}
