import { hideLoader, showAlert } from '../../redux/actions/AppActions';
export function handleApiError(error: any, appDispatch: any) {
    appDispatch(hideLoader());
    isDisplayError(error) && appDispatch(showAlert(error));
}

function isDisplayError(message: string) {
    switch (message) {
        case "Nothing to display":
            return false;
        case "Unauthorized":
            return false;
        case "403":
            return false;
        default:
            return true;
    }

}