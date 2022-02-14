import { isNullOrUndefined } from "util";

export function nullCheck(value: string, defaultValue: string) {
    return isNullOrUndefined(value) ? defaultValue : value;
}

export function isNullValue(value: any) {
    return isNullOrUndefined(value) || value === "";
}

export function convertToFloat(value: string) {
    return isNullOrUndefined(value) || value === "" ? 0 : Number.parseFloat(value)
}
export function isObjectEmpty(obj: any) {
    return Object.keys(obj).length === 0 && obj.constructor === Object

}
export function doesNotInclude(state:any, value: any) {
    var include_flag = state.includes(value);
    return !include_flag;

}