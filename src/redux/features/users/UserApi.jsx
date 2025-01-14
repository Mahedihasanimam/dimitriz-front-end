const { api } = require("@/redux/baseApi");

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/users/auth/signup",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),


    registerasInstructor: builder.mutation({
      query: (user) => ({
        url: "/users/auth/signup-as-instructor",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),





    

    verifyEmail: builder.mutation({
      query: (email) => ({
        url: "/auth/verify",
        method: "POST",
        body: email,
      }),
    }),


    forgetpassword: builder.mutation({
      query: (data) => ({
        url: "/users/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetpassword: builder.mutation({
      query: (data) => ({
        url: "/users/auth/reset-password",
        method: "POST",

        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/users/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),

    OtpVerify: builder.mutation({
      query: (otp) => ({
        url:"/users/auth/verify-email",
        method: "POST",
        body: otp,
      }),
    }),




// --------------------------------------------------------------------





















    getLoginUserById: builder.query({
      query: (id) => `/users/get-one-user/${id}`,
      providesTags: ["user"],
    }),

    getProfile: builder.query({
      query: (token) => ({
        url: "/users/profile",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response, meta, arg) => {
        // Transform or process the response if needed
        return response; // Ensure the response is returned
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          // Dispatch action to update the user in userSlice
          dispatch(userSlice.actions.setUser(data));
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      },
      providesTags: ["user"],
    }),

    getmyorderList: builder.query({
      query: (token) => ({
        url: "/my-order-list",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["user"],
    }),

    leaveAreview: builder.mutation({
      query: (alldata) => ({
        url: "/reviews",
        method: "POST",
        body: alldata,
      }),
      // Add the tag to invalidate or update the cache for review-related data
      invalidatesTags: [{ type: "Review", id: "LIST" }],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/auth/profile-update",
        method: "POST",

        body: data,
      }),
    }),

    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    getNotifiByUserId: builder.query({
      query: (id) => `/users/notifications-by-user/${id}`,
      providesTags: ["notifications"],
    }),

    getAbotUs: builder.query({
      query: () => "/aboutus",
    }),


    getadminProfile: builder.query({
      query: () =>({
        url: `/admin-profile`,
        method: "GET",
      }),
    }),



    // contactUs: builder.mutation({
    //   query: (data) => ({
    //     url: "/help/send-mail-to-support",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useVerifyEmailMutation,
  useOtpVerifyMutation,

  useGetLoginUserByIdQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
  useForgetpasswordMutation,
  useResetpasswordMutation,
  useGetmyorderListQuery,
  useLeaveAreviewMutation,
  useGetAbotUsQuery,
  useUpdatePasswordMutation,
  useGetadminProfileQuery,
  useRegisterasInstructorMutation,
  
} = userApi;
