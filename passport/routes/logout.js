'use strict';

const express = require('express');
const service = require('../service');
const router = express.Router();
const { t_token, t_client_info } = require('../data/index');

router.get('/', function (req, res, next) {

  const token = req.query.token;
  console.log('===', token, t_token, t_client_info);

  try {
    // 销毁全局会话
    res.clearCookie('token');

    // 获取处注册的子系统，依次调用子系统的登录的方法
    t_token.splice(t_token.indexOf('token'), 1);
    delete t_client_info[token];

    console.log('===', token, t_token, t_client_info);

    res.json({ isSuccess: true });
  } catch (err) {
    res.json({error: 2, ret_msg: '退出登录失败'});
  }
});

module.exports = router;
