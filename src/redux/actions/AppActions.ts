import AppTypes from "../types/AppTypes";

export const openDrawer = () => ({
    type: AppTypes.OPEN_DRAWER,
});


export const showLoader = () => ({
    type: AppTypes.SHOW_LOADER,
});

export const hideLoader = () => ({
    type: AppTypes.HIDE_LOADER,
});

export const showAlert = (message: string) => ({
    type: AppTypes.SHOW_ALERT,
    message: message,
});

export const hideAlert = () => ({
    type: AppTypes.HIDE_ALERT,
});

export const enableActionButton = () => ({
    type: AppTypes.ENABLE_ACTION_BUTTON,
});

export const disableActionButton = () => ({
    type: AppTypes.DISABLE_ACTION_BUTTON,
});

export const setMainMenuInfo = (value: any) => ({
    type: AppTypes.MAIN_MENU_INFO,
    value
})