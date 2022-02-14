import DrawerMenuTypes from "../types/DrawerMenuTypes";

export const openSubMenu = (value: string) => ({
    type: DrawerMenuTypes.OPEN_SUB_MENU,
    value,
});

export const closeAllSubMenu = () => ({
    type: DrawerMenuTypes.CLOSE_ALL_SUB_MENU,
});

