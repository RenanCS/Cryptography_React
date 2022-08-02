import { IWatherForecastDto } from "../model/temperatureDto";
import api from "./api";

export const postTemperature = async (info: IWatherForecastDto): Promise<string> => {

    try {
        const response = await api.post<string>('WeatherForecast/PostTemperature', info);
        return response.data;

    } catch (err) {
        return err as string;
    }

};
