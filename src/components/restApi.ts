import axios, { AxiosInstance } from "axios";

const restApi: AxiosInstance = axios.create({
	baseURL: `https://yts.mx/api/v2/`,
  headers: {
    "Content-type": "application/json",
  },
});

export default restApi;

export const getData = async (url:string) => {
  try {
    return await restApi.get(`${url}`);
    // console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

export const setData = async (url:string, options: Object) => {
  try {
    const response = await restApi.post(`${url}`, options);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}



