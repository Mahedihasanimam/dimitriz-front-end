import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Cookies from "js-cookie";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://27.0.175.106:5000",
    prepareHeaders: (headers) => {
      const token = Cookies.get("token"); // Correct usage
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        headers.set("Accept", `*/*`);
        // headers.set("Content-Type", `application/json`);
        headers.set("Access-Control-Allow-Origin", `*/*`);
      }
      return headers;
    },
  }),
  tagTypes: ["user", "blog", "faq", "about","notification"],
  endpoints: () => ({}),
});

export const imageUrl = "http://27.0.175.106:5000/";
export const dashboardUrl = "http://admin.pantognostis.net/";
