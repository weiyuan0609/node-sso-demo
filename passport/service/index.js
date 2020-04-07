'use strict';
const { t_token, t_client_info } = require('../data/index');

/**
 *
 * @param {String} token
 * @return {Boolean}
 */
function isTokenValid(token) {
  // TODO 从存储系统中查找相应 token 信息，判断 token 的合法性
  console.log('ddd', token, t_token, t_client_info);
  if (token && t_token.includes(token)) {
    return true;
  }
  return false;
}

module.exports = {
  isTokenValid
};
