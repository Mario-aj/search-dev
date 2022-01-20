// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getGithubAccessToken = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { code } = req.body;
  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}&code=${code}`,
      { headers: { accept: 'application/json' } }
    );

    const { data } = response;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default getGithubAccessToken;
