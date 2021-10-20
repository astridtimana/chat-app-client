import {postUser} from '../src/services/users';
import axios from 'axios';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should create users', () => {
  const users = {email:'thai@gmail.com', password:'thai123'};
  const resp = {data: users, status: 200};
  mockedAxios.post.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return postUser({email:'thai@gmail.com', password:'thai123'})
    .then(res => console.log(res))
    //@ts-ignore
    .then(res => expect(res.status).toBe(200));
});
