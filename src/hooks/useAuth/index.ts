import { LoginData, einsteinApi } from "@services";
import { AxiosResponse } from "axios";

export const useAuth = () => {
  const login = async (
    { username, password }: LoginData,
    callbackSuccess?: (response: AxiosResponse) => void,
    callbackError?: (error: Error) => void,
  ) => {
    try {
      const response = await einsteinApi.auth.login({ username, password });

      callbackSuccess && callbackSuccess(response);
    } catch (error: any) {
      callbackError && callbackError(error.response.data);
    }
  };

  return {
    login,
  };
};
