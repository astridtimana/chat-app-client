import axios, { AxiosResponseHeaders } from 'axios';
import jwtDecode from 'jwt-decode'
// import { postLogin } from './auth';

// const url = "https://be-chat-app.herokuapp.com/users";
const url = 'http://localhost:8080/users';


export const postUser = async (newUser: any) => {
  //@ts-ignore
  const res: AxiosResponseHeaders = await axios({
    method: "post",
    url: url,
    data: newUser,
    withCredentials:true
  });

  if (Number(res.status) !== 200) {
    return new Error("Incorrect email or password");
  }

  const storedToken = localStorage.setItem('token', res.data)
  //@ts-ignore
  const decodeToken = jwtDecode(storedToken.token)
  return decodeToken;
};


export const getUsers = async (token: string) => {
  const res = await axios({
    method: "get",
    url: `${url}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200) {
    return new Error("Error");
  }
  return res.data;
};


/* export const getUser = async (token: string, userId: number) => {
  const resp = await axios({
    method: "get",
    url: `${baseUrl}/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  if (resp.status !== 200) {
    return new Error("Error");
  }
  return resp;
};


export const deleteUsers = async (token: string, userId: number) => {
  const resp = await axios({
    method: "delete",
    url: `${baseUrl}/${userId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (resp.status !== 200) {
    return new Error("Error");
  }
  return resp;
};


export const putUsers = async (token:string, userUpdate: any, userId: number) => {
  const resp = await axios({
    method: "put",
    url: `${baseUrl}/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(userUpdate),
  });
  return resp;
};
 */