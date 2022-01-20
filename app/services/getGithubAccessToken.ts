import axios from 'axios';

const githubAccessToken = (code: string) =>
  axios.post('/api/login', { code }).then((r) => r.data);

export default githubAccessToken;
