import axiosInstance from "../config/axiosConfig";

const postRequest = options => {
  return axiosInstance.post(options.endpoint, options.body).catch(e => {
    return e.response;
  });
};

export function login(loginRequest) {
  return postRequest({
    endpoint: "/auth/signin",
    body: JSON.stringify(loginRequest)
  });
}
