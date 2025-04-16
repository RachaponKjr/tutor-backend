export const responseSuccess = (data: unknown) => ({
  status: true,
  data,
});

export const responseError = (message: string) => ({
  status: false,
  message,
});
