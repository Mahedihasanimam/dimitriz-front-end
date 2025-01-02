const { api } = require("@/redux/baseApi");

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getallproduct: builder.query({
      query: () => ({
        url: `/product-view`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getSingleproductByid: builder.query({
      query: (id) => ({
        url: `/showProduct/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getreviewByproductid: builder.query({
      query: (id) => ({
        url: `/review-by-product?product_id=${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetallproductQuery,
  useGetSingleproductByidQuery,
  useGetreviewByproductidQuery,
} = productApi;
