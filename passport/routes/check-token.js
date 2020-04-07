'use strict';

const express = require('express');
const service = require('../service');
const router = express.Router();

router.get('/', function (req, res, next) {
  let token = req.query.token;
  let result = {
    error: 1, //登录失败
  };
  if (service.isTokenValid(token)) {
    result.error = 0;
    result.userId = 'test';
  }
  res.json(result);
});

module.exports = router;
