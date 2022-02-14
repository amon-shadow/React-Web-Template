import { OptionType } from "../../component/widgets/widgetsInterfaces";

export function setAutoCompleteList(params: Array<any> | undefined, labelKey?: string, valueKey?: string): Array<OptionType> {
    // use element  as label and value when array type is string
    return (params && params.map((element: any) => ({
        label: (labelKey && element[labelKey]) || "label",
        value: (valueKey && element[valueKey]) || "value",
    }))) || [];
}

export function setAutoCompleteListFromObject(params: Array<any> | undefined,
    parentKey: string, labelKey?: string, valueKey?: string): Array<OptionType> {
    // use element  as label and value when array type is string
    return (params && params.map((element: any) => ({
        label: (labelKey && element[parentKey][labelKey]) || "label",
        value: (valueKey && element[parentKey][valueKey]) || "value",
        data: element,
    }))) || [];
}

export function setAutoCompleteListWithData(params: Array<any> | undefined,
    labelKey?: string, valueKey?: string): Array<OptionType> {
    // use element  as label and value when array type is string
    return (params && params.map((element: any) => ({
        label: (labelKey && element[labelKey]) || "label",
        value: (valueKey && element[valueKey]) || "value",
        data: element,
    }))) || [];
}

export function setAutoCompleteListCustomLabel(params: Array<any> | undefined,
    labelKey: string, valueKey: string, helperKey: string): Array<OptionType> {
    // use element  as label and value when array type is string
    return (params && params.map((element: any) => ({
        label: ((labelKey && element[labelKey]) + ((helperKey && element[helperKey]) ?
            (" ( " + element[helperKey] + " )") : "")) || "label",
        value: (valueKey && element[valueKey]) || "value",
        data: element,
    }))) || [];
}

export function getStringAutoCompleteData(params: Array<any> | null): Array<any> {
    return (params && params.map((element: any) => ({
        label: element,
        value: element
    }))) || []
}

export function createLocationObject(params: any) {
    return {
        code: params.code,
        lat: params.latitude,
        long: params.longitude,
        name: params.name
    }
}

export function removeListItem(list: any, selected: any) {
    return list && list.filter((element: any) => element.index !== selected.index)
        .map((element: any, index: number) => ({
            ...element,
            index: index
        }));
}

export function groupBy(array: any, key: any) {
    // Return the end result
    return array.reduce((result: any, currentValue: any) => {
        // If an array already present for key, push it to the array. Else create an array and push the object
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
        );
        // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
        return result;
    }, {}); // empty object is the initial value for result object
};