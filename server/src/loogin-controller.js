const axios = require('axios');

class LoginController {
  async login(req, res) {
    const { client_id, client_secret, code } = req.body;

    try {
      const response = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`,
        { headers: { Accept: 'application/json' } }
      );

      const { data } = response;
      return res.status(200).json(data);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new LoginController();
