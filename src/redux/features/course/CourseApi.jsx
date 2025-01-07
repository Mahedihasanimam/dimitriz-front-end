const { api } = require("@/redux/baseApi");

const CourseApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getallCourse: builder.query({
      query: () => ({
        url: `/course/get-all-courses`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),


    getallCategory: builder.query({
      query: () => ({
        url: `/course/get-all-categories`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    getSingleCourseByid: builder.query({
      query: (id) => ({
        url: `/course/get-course-by-id/${id}`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),

    // getreviewByproductid: builder.query({
    //   query: (id) => ({
    //     url: `/review-by-product?product_id=${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["product"],
    // }),



  }),
});

export const {
  useGetallCourseQuery,
  useGetallCategoryQuery,
  useGetSingleCourseByidQuery,
} = CourseApi;
