import axios, { AxiosResponseHeaders } from 'axios';

// const url = 'https://be-chat-app.herokuapp.com';
const url = 'http://localhost:8080';

export const postLogin = async (data: any) => {
  const res: AxiosResponseHeaders = await axios.post(`${url}`, data, {withCredentials:true} );
  console.log(res.data);
  return res.data
}

/* export const getCurrentUser = async () => {
  const res: AxiosResponseHeaders = await axios.get(`${baseUrl}/currentUser`, {withCredentials:true});
  console.log(res.data);
  return res
}
 */
