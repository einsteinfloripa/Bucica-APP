import { AxiosResponse } from "axios";
import { useState } from "react";

import { einsteinApi } from "@services";

export const useQrCode = () => {
  const [qrData, setQrData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createAttendance = async (
    qrData: string,
    callbackSuccess?: (response: AxiosResponse) => void,
    callbackError?: (error: Error) => void,
  ) => {
    try {
      const response = await einsteinApi.attendance.createAttendance(qrData);
      callbackSuccess && callbackSuccess(response);
    } catch (error: any) {
      callbackError && callbackError(error.response.data);
    }
  };

  return { createAttendance, qrData, setQrData, isLoading, setIsLoading };
};
