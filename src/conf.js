module.exports = {
  // 认证 Cookie 名称，请根据业务自行定义，如：rong_im_auth
  AUTH_COOKIE_NAME: '<-- 此处设置 Cookie 名称 -->',
  // 认证 Cookie 加密密钥，请自行定义，任意字母数字组合
  AUTH_COOKIE_KEY: '<-- 此处设置 Cookie 加密密钥 -->',
  // IV is an initialization vector
  AUTH_COOKIE_IV: 'FnJL7EDzjqWjcaY9',
  // 认证 Cookie 过期时间，单位为毫秒，2592000000 毫秒 = 30 天
  AUTH_COOKIE_MAX_AGE: 2592000000,
  // 融云颁发的 App Key，请访问融云开发者后台：https://developer.rongcloud.cn
  RONGCLOUD_APP_KEY: '<-- 此处填写融云颁发的 App Key -->',
  // 融云颁发的 App Secret，请访问融云开发者后台：https://developer.rongcloud.cn
  RONGCLOUD_APP_SECRET: '<-- 此处填写融云颁发的 App Secret -->',
  // 融云短信服务提供的注册用户短信模板 Id
  RONGCLOUD_SMS_REGISTER_TEMPLATE_ID: '<-- 此处填写融云颁发的短信模板 Id -->',
  // 七牛颁发的 Access Key，请访问七牛开发者后台：https://portal.qiniu.com
  QINIU_ACCESS_KEY: '<-- 此处填写七牛颁发的 Access Key -->',
  // 七牛颁发的 Secret Key，请访问七牛开发者后台：https://portal.qiniu.com
  QINIU_SECRET_KEY: '<-- 此处填写七牛颁发的 Secret Key -->',
  // 七牛创建的空间名称，请访问七牛开发者后台：https://portal.qiniu.com
  QINIU_BUCKET_NAME: '<-- 此处填写七牛创建的空间名称 -->',
  // 七牛创建的空间域名，请访问七牛开发者后台：https://portal.qiniu.com
  QINIU_BUCKET_DOMAIN: '<-- 此处填写七牛创建的空间域名 -->',
  // 云片颁发的 APi Key, 请访问云片开发者后台: https://www.yunpian.com/admin/main
  YUNPIAN_API_KEY: '<-- 此处填写云片颁发的 API Key -->',
  // N3D 密钥，用来加密所有的 Id 数字，不小于 5 位的字母数字组合
  N3D_KEY: '<-- 此处设置加密 Id 的密钥 -->',
  // 认证 Cookie 主域名 如果没有正式域名，请修改本地 hosts 文件配置域名
  AUTH_COOKIE_DOMAIN: '<-- 此处设置 Cookie 主域名， 必须和 CORS_HOSTS 配置项在相同的顶级域下 例如： api.sealtalk.im -->',
  // 跨域支持所需配置的域名信息，包括请求服务器的域名和端口号，如果是 80 端口可以省略端口号。如：http://web.sealtalk.im
  CORS_HOSTS: '<-- 此处设置请求的域名信息 , 例如： web.sealtalk.im -->',
  // 本服务部署的 HTTP 端口号
  SERVER_PORT: 8585,
  // MySQL 数据库名称
  DB_NAME: '<-- 此处设置数据库名称 -->',
  // MySQL 数据库用户名
  DB_USER: '<-- 此处设置数据库用户名 -->',
  // MySQL 数据库密码
  DB_PASSWORD: '<-- 此处设置数据库密码 -->',
  // MySQL 数据库服务器地址
  DB_HOST: '<-- 此处设置数据库服务器的 IP 地址 -->',
  // MySQL 数据库服务端口号
  DB_PORT: 3306
};

// 示例：
/** 
module.exports = {
  AUTH_COOKIE_NAME: 'rong_auth_cookie',
  NICKNAME_COOKIE_NAME: '',
  AUTH_COOKIE_MAX_AGE: '2592000000',
  RONGCLOUD_SMS_REGISTER_TEMPLATE_ID: 'o2jdj82dagT3tIPJCS2',
  RONGCLOUD_APP_KEY: '8ljko22vuee', // 此处为假数据
  RONGCLOUD_APP_SECRET: 'y0je2id4h1LWz', // 此处为假数据
  QINIU_ACCESS_KEY: 'kokjii22n2dentEiMxpQ8Qskkookn2ddnX', // 此处为假数据
  QINIU_SECRET_KEY: '0pknd92neke9dm1plsn20C6Hni3TIVgjw5', // 此处为假数据
  QINIU_BUCKET_NAME: 'devtalk-image',
  QINIU_BUCKET_DOMAIN: 'self.domain.com', // 此处为假数据
  YUNPIAN_API_KEY: '123iijmbbi9kn4bsp92odd21d213q', // 此处为假数据
  YUNPIAN_SMS_HOST: 'sms.yunpian.com',
  YUNPIAN_INTERNAL_SMS_HOST: 'us.yunpian.com',
  YUNPIAN_SEND_SMS_URI: '/v2/sms/tpl_single_send.json',
  YUNPIAN_GET_TPL_URI: '/v2/tpl/get.json',
  N3D_KEY: '11EdDIaqpcim',
  AUTH_COOKIE_DOMAIN: 'devtalk.im',
  CORS_HOSTS: 'http://web.devtalk.im',
  SERVER_PORT: '8585',
  DB_NAME: 'sealtalk',
  DB_USER: 'devtalk',
  DB_PASSWORD: 'devtalk',
  DB_HOST: '127.0.0.1',
  DB_PORT: '3306'
};
*/
