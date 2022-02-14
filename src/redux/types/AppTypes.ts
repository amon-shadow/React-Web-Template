import { createTypes } from 'reduxsauce';


export default createTypes<any>(`
  OPEN_DRAWER
  SHOW_LOADER
  HIDE_LOADER
  SHOW_ALERT
  HIDE_ALERT
  DISABLE_ACTION_BUTTON
  ENABLE_ACTION_BUTTON
  MAIN_MENU_INFO
`);