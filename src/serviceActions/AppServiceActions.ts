import { Dispatch } from 'redux';
import { handleApiError } from '../base/utility/ErrorHandleUtils';
import { app } from '../services';


export const getUserProfileData = (): any => async (dispatch: Dispatch) => {
    return app.getUserProfile().then((responseAxios: any) => responseAxios.details
    ).catch((error: any) => {
        handleApiError(error.message, dispatch)
    });
};
