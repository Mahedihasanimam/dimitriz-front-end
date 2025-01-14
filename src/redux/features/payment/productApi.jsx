const { api } = require("@/redux/baseApi");

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `/payment/create-payment-intent`,
        method: "POST",
        body: data,
      }),
    }),

    paymentSuccess: builder.mutation({
      query: (data) => ({
        url: `/payment/confirm-payment`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation, usePaymentSuccessMutation } =
  paymentApi;
