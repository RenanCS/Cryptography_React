import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { FactoryAes } from "../crypt/factory/FactoryAes";
import { FactoryPubPriKey } from "../crypt/factory/FactoryPubPriKey";

const factoryAes = new FactoryAes();
const factoryPubPriKey = new FactoryPubPriKey();

const api = axios.create({
    baseURL: "https://localhost:7231",
});

api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        if (config.data) {
            // const dataEncryopt = factoryAes.encrypt(config.data as string);
            const dataEncryopt = factoryPubPriKey.encrypt(config.data as string);
            config.data = dataEncryopt;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    });

api.interceptors.response.use(
    (config: AxiosRequestConfig) => {
        if (config.data) {
            const dataDescrypt = factoryPubPriKey.decrypt(config.data as string);
            // const dataDescrypt = factoryAes.decrypt(config.data as string);
            config.data = dataDescrypt;
        }
        return Promise.resolve(config);
    },
    (error: AxiosError) => {
        debugger;
        const dataDescrypt = factoryPubPriKey.decrypt(error.response?.data as string);
        // const dataDescrypt = factoryAes.decrypt(error.response?.data as string);
        return Promise.reject(dataDescrypt);
    });


export default api;