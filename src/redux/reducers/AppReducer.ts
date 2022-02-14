import { createReducer } from "reduxsauce";
import { AppState } from "../storeStates/AppStoreInterface";
import AppTypes from "../types/AppTypes";

// the initial state of this reducer
export const APP_INIT_STATE: AppState = {
  drawerSate: false,
  showLoader: false,
  showHomeSearch: false,
  showHomeFilter: false,
  isHomePage: false,
  alertMessage: undefined,
  disableActionButton: false
}

// Handle Drawer Open and Close Sate
export const openDrawerReducer = (state = APP_INIT_STATE) => {
  return { ...state, drawerSate: !state.drawerSate }
}

export const showLoaderReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    showLoader: true,
  }
};

export const hideLoaderReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    showLoader: false,
  }
};

export const showAlertReducer = (state = APP_INIT_STATE, action: any) => {
  return {
    ...state,
    alertMessage: action.message,
    showAlert: true,
  }
};

export const hideAlertReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    showAlert: false,
  }
};


export const enableActionButtonReducer = (state = APP_INIT_STATE,) => {
  return {
    ...state,
    disableActionButton: false,
  }
};

export const disableActionButtonReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    disableActionButton: true,
  }
};

const setMainMenuInfoReducer = (state = APP_INIT_STATE, action: any) => {
  return {
    ...state,
    menuSelectedIndex: action.value.index,
    menuElement: action.value.element,
  }
};

const ACTION_HANDLERS = {
  [AppTypes.OPEN_DRAWER]: openDrawerReducer,
  [AppTypes.SHOW_LOADER]: showLoaderReducer,
  [AppTypes.HIDE_LOADER]: hideLoaderReducer,
  [AppTypes.SHOW_ALERT]: showAlertReducer,
  [AppTypes.HIDE_ALERT]: hideAlertReducer,
  [AppTypes.ENABLE_ACTION_BUTTON]: enableActionButtonReducer,
  [AppTypes.DISABLE_ACTION_BUTTON]: disableActionButtonReducer,
  [AppTypes.MAIN_MENU_INFO]: setMainMenuInfoReducer,
}

export default createReducer(APP_INIT_STATE, ACTION_HANDLERS);

