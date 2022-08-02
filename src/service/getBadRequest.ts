import api from "./api";

export const getBadRequest = async (): Promise<string> => {

    try {
        const response = await api.get<string>('WeatherForecast/GetBadRequest');
        return response.data;

    } catch (err) {
        return err as string;
    }

};
