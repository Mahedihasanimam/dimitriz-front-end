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
    getallWebinnar: builder.query({
      query: () => ({
        url: `/webinar/get-all-webinars`,
        method: "GET",
      }),
      providesTags: ["webinar"],
    }),





    getCourseByCategory: builder.query({
      query: () => ({
        url: `/course/get-all-courses-by-category`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    getFiltaredCourseBycategory: builder.query({
      query: (category) => ({
        url: `/course/get-all-courses?category=${category}`,
        method: "GET",
      }),
      providesTags: ["course"],
    }),
    CourseSearch: builder.query({
      query: (search) => ({
        url: `/course/get-all-courses?search=${search}`,
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



    
getcourseByInstructorId: builder.query({
      query: (id) => ({
        url: `/course/get-course-by-instructor-id/${id}`,
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
  useGetCourseByCategoryQuery,
  useGetFiltaredCourseBycategoryQuery,
  useGetcourseByInstructorIdQuery,
  useCourseSearchQuery,
  useGetallWebinnarQuery,
  
} = CourseApi;
