import axios, { AxiosResponseHeaders } from 'axios';
import jwtDecode from 'jwt-decode'

// const url = 'https://be-chat-app.herokuapp.com';
const url = 'http://localhost:8080';

export const postLogin = async (data: any) => {
  const res: AxiosResponseHeaders = await axios.post(`${url}`, data, {withCredentials:true} );
  //@ts-ignore
  localStorage.setItem('token', res.data.token)
  const storage = localStorage.getItem('token')
  if (storage) {
    const decodedToken = jwtDecode(storage)
    // console.log(decodedToken)
    return decodedToken;
  }
}

