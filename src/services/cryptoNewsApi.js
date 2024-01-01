import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "c6e657a98dmsh79c6a5314aced09p1e2da4jsn9ef6a9c79228",
  "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
};

const baseUrl = "https://news-api14.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ q, pageSize }) =>
        createRequest(`/search?q=${q}&pageSize=${pageSize}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
