

export function isNullOrUndefined(val) {
    return val === undefined;
}
export function isNullorEmpty(val: string) {
    if (isNullOrUndefined(val)) {
        return true;
    }
    if (typeof val === 'string') return val.trim().length == 0;
    return false;
}