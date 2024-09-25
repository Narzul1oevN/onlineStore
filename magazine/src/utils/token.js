import axios from "axios";

export function saveToken(token) {
  localStorage.setItem("token", token);
}
export function deleteToken()
{
  localStorage.removeItem("token");
}

export const axiosRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});


