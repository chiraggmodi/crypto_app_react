import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": "14aa6abf51msh1e21cefe9e5fa51p169102jsnaac35f0d5fcf",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const BASEURL = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptosHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery, useGetExchangesQuery } =
  cryptoApi;
