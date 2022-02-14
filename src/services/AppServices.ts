import { AxiosInstance } from "axios";
import { getUserProfileUrl } from '../base/api/ServiceUrl';

export default (api: AxiosInstance) => {
    function getUserProfile() {
        return api.get(getUserProfileUrl);
    }


    return {
        getUserProfile,
    }
}