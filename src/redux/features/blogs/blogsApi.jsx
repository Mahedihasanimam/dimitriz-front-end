const { api } = require("@/redux/baseApi");

const blogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getallBlogs: builder.query({
      query: () => ({
        url: `/blog-list`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    getsingleBlogbyId: builder.query({
      query: (id) => ({
        url: `/blog-details/${id}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});

export const { useGetallBlogsQuery, useGetsingleBlogbyIdQuery } = blogsApi;
