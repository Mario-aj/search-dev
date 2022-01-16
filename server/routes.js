const router = require('express').Router();
const LoginController = require('./loogin-controller');

router.post('/github/login', LoginController.login);

module.exports = router;
