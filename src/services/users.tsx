import axios from 'axios';

const url = "https://be-chat-app.herokuapp.com/users";
// const url = 'http://localhost:8080/users';


export const postUser = async (newUser: any) => {
  const resp = await axios({
    method: "post",
    url: url,
    data: newUser,
    withCredentials:true
  });
  if (resp.status !== 200) {
    return new Error("Error");
  }
  return resp;
};


/* export const getUsers = async (token: string) => {
  const resp = await axios({
    method: "get",
    url: `${baseUrl}`,
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


export const getUser = async (token: string, userId: number) => {
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