import axios from "axios";

const api = axios.create({
  baseURL: "https://hooked-on-books-39bd24fadd57.herokuapp.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
// registration
export const registerUser = async (formData) => {
  return await api
    .post("/auth/register", formData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
//login

export const login = async ({ username, password }) => {
  return axios
    .post(
      "https://hooked-on-books-39bd24fadd57.herokuapp.com/api/auth/login",
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
