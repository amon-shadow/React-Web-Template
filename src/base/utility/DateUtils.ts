import MomentUtils from "@date-io/moment";
import { Moment } from "moment";

export const displayDateFormatter = "DD/MM/YYYY";
export const trackingDisplayDateFormatter = "DD MMM, hh:mmA";
export const displayDateTimeFormatter = "DD/MM/YYYY hh:mm A";
export const display24DateTimeFormatter = "YYYY-MM-DD HH:MM";
export const displayTimeFormatter = "hh:mm A";
export const serverDateFormat = "YYYY-MM-DD";
export const hyphenDate = "YYYY-MM-DD";

export function convertDateToServerFormatFormat(date: Moment | any): string {
    try {
        return new MomentUtils().date(date).toISOString(true);
    } catch (error) {
        return date && date.toISOString();
    }
}

export function convertFormatedDate(date: string | any, format: string): string {
    try {
        return new MomentUtils().date(date).format(format).toString()
    } catch (error) {
        return date && date.toString();
    }
}

export function getFutureDate(date: Moment | any, noOfDays: number) {
    try {
        return new MomentUtils().addDays(date, noOfDays)
    } catch (error) {
        return date;
    }
}
export function previousMonth(date: Moment | any) {
    try {
        return new MomentUtils().moment(date).subtract(1, "months");
    } catch (error) {
        return date;
    }
}

export function isDateGreater(fromDate: any, toDate: any) {
    try {
        return new MomentUtils().moment(fromDate).isAfter(toDate);
    } catch (error) {
        return false;
    }
}


export function getDifferenceInDates(fromDate: any, toDate: any) {
    try {
        return new MomentUtils().moment(fromDate).diff(toDate, "hours");
    } catch (error) {
        return 0;
    }
}