export default function (
  { $axios, store }: any,
  inject: (arg0: string, arg1: any) => void
) {
  const api = $axios.create({
    baseURL: "/api",
    timeout: 20000,
    headers: {
      "Content-Type": "application/json",
      Authorization: store.state.accessToken,
    },
  });

  async function refresh(error: { response: { status: number } }) {
    if (error.response && error.response.status === 419) {
      location.reload();
    }
    return Promise.reject(error);
  }

  api.interceptors.response.use((response: any) => response, refresh);
  inject("http", api);
}
