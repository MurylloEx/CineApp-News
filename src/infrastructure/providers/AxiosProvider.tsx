import axios, { AxiosInstance } from 'axios';
import React, { createContext, useCallback, useMemo, useRef } from 'react';
import { ProviderComponent } from 'src/core';

export type AxiosInstanceSetter = (axiosInstance: AxiosInstance) => void;
export type AxiosProviderValue = [AxiosInstance, AxiosInstanceSetter];

const AxiosDefaultInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const AxiosContext = createContext<AxiosProviderValue>([AxiosDefaultInstance, () => {}]);

export const AxiosProvider: ProviderComponent = ({ children }) => {
  const axiosRef = useRef<AxiosInstance>(AxiosDefaultInstance);

  const setAxios = useCallback((axiosInstance: AxiosInstance) => {
    axiosRef.current = axiosInstance;
  }, []);

  const state: AxiosProviderValue = useMemo(() => [
    axiosRef.current, 
    setAxios
  ], [setAxios]);

  return (
    <AxiosContext.Provider value={state}>
      {children}
    </AxiosContext.Provider>
  );
}
