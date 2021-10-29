import axios from "axios";

// const url = "https://be-chat-app.herokuapp.com/users";
const url = "http://localhost:8080/chat";

export const postMessages = async (token: string, data: any) => {
  //@ts-ignore
  const res: AxiosResponseHeaders = await axios({
    method: "post",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
    data,
  });

  if (Number(res.status) !== 200) {
    return new Error("Message cannot be sent");
  }

  return res.data;
};

export const getUserMessages = async (token: string, fromId: string) => {
  const res = await axios({
    method: "get",
    url: `${url}/${fromId}`,
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
