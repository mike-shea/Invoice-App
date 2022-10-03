const noValidationConfig = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false
};

const initialFilter = {
  draft: true,
  pending: true,
  paid: true
};

export default noValidationConfig;
export { initialFilter };
