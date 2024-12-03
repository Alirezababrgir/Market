import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Services = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `stickers`,
    }),
  }),
});

export const { useGetAllProductsQuery } = Services;
