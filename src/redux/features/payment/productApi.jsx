const { api } = require("@/redux/baseApi");

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `/create-order`,
        method: "POST",
        body: data,
      }),
    }),

    paymentSuccess: builder.mutation({
      query: (data) => ({
        url: `/success-payment`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation, usePaymentSuccessMutation } =
  paymentApi;
