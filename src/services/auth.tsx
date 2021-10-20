import axios, { AxiosResponseHeaders } from 'axios';

// const baseUrl = 'be-chat-app.herokuapp.com';
const baseUrl = 'http://localhost:8080';

export const postLogin = async (data: any) => {
  const res: AxiosResponseHeaders = await axios.post(`${baseUrl}/auth`, data, {withCredentials:true} );
  console.log(res.data);
  return res.data
}

/* export const getCurrentUser = async () => {
  const res: AxiosResponseHeaders = await axios.get(`${baseUrl}/currentUser`, {withCredentials:true});
  console.log(res.data);
  return res
}
 */
