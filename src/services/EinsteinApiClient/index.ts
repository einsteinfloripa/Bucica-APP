import axios, { AxiosInstance } from "axios";

class EinsteinApiClient {
  protected readonly api: AxiosInstance;
  public readonly attendance: Attendance;

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    });
    this.attendance = new Attendance(this.api);
  }
}

class Attendance {
  constructor(protected readonly api: AxiosInstance) {}

  async createAttendance(studentId: string) {
    const response = await this.api.post(
      `/presenca/${studentId}`,
      {},
      {
        auth: {
          username: localStorage.getItem("username") || "",
          password: localStorage.getItem("password") || "",
        }
      },
    );
    return response;
  }
}

export const einsteinApi = new EinsteinApiClient();
