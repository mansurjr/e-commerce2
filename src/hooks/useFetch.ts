import { useEffect, useState } from "react";
import { api } from "../api";
import type { AxiosError } from "axios";

interface IParams {
  limit?: number;
  page?: number;
  skip?: number;
  sortBy?: string;
  order?: string;
}

interface FetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export const useFetch = <T = unknown>(
  endpoint: string,
  params?: IParams,
  immediate: boolean = true
) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    error: null,
    loading: immediate,
  });

  const fetchData = async (customParams?: IParams) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const res = await api.get<T>(endpoint, {
        params: customParams ?? params,
      });
      setState({ data: res.data, error: null, loading: false });
    } catch (err) {
      const error = err as AxiosError;
      setState({
        data: null,
        error: error.message || "Unknown error",
        loading: false,
      });
    }
  };

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [endpoint, JSON.stringify(params)]);

  return { ...state, refetch: fetchData };
};
