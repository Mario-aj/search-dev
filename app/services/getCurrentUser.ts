import axios from 'axios';

const getCurrentUser = async (accessToken: string) => {
  try {
    const response = await axios.get(`https://api.github.com/user`, {
      headers: { Authorization: `token ${accessToken}` },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default getCurrentUser;
