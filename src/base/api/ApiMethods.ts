import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";


const defaultTimeOut = 30000;
const DEBUG = process.env.NODE_ENV === 'development';

interface ServerResponse {
    data: any,
    meta: any
}
const Api = Axios.create({
    baseURL: "/",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: defaultTimeOut,
});


Api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        /** In dev, intercepts request and logs it into console for dev */
        if (DEBUG) {
            console.info('Service Request', config);
        }
        return config;
    },
    (error: any) => {
        if (DEBUG) { console.error('Service Error', error); }
        return Promise.reject(error);
    });

/**
* Passes response.data to services.
* In dev, intercepts response and logs it into console for dev
*/


Api.interceptors.response.use(

    (response: AxiosResponse) => {
        if (DEBUG) { console.info('Service Response', response); }
        // return response.data;
        try {
            // Need to change after Backend changes
            return Promise.resolve((response.data));

        } catch (error) {
            return Promise.reject(error)
        }
    },
    (error: any) => {
        if (process.env.NODE_ENV !== 'development' && error.response && error.response.status === 401) {
            try {
                window.location.replace('login');
            } catch (e) {
                // Raven.captureException(e);
            }
            throw new Axios.Cancel('Unauthorized');
        }
        if (error.response && error.response.data) {
            if (DEBUG) { console.error('Error: ', error.response); }
            return Promise.reject(error.response.data);
        }
        if (DEBUG) { console.error('Service Error', error); }
        return Promise.reject(error);
    });

export default Api;
