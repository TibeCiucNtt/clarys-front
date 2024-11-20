import axios, { AxiosRequestConfig } from "axios";

import {ApiResponse} from "@/types"

/**
 * Fetch data from an API endpoint using Axios.
 * @param url - The API endpoint.
 * @param config - Axios request configuration.
 * @returns A promise that resolves to the response data or an error.
 */
export async function fetchData<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> {
  try {
    const response = await axios.get<T>(url, config);

    return { data: response.data, error: null };
  } catch (error: any) {
    return {
      data: null,
      error: error.response?.data?.message || error.message,
    };
  }
}
