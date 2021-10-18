import axios from 'axios';

const baseUrl = "be-chat-app.herokuapp.com/users";

export const getUsers = async (token: string) => {
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
  try {
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
  } catch (error) {
    return error;
  }
};

export const postUser = async (token: string, newUser: any) => {
  const resp = await axios({
    method: "post",
    url: baseUrl,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(newUser),
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
