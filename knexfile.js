module.exports = {
  client: 'mysql',
  connection:  {
      host      : process.env.HOSTGATOR_HOST,
      user      : process.env.HOSTGATOR_USER,
      password  : process.env.HOSTGATOR_PASSWORD,
      database  : process.env.HOSTGATOR_DATABASE,
      port: '3306',
      char_set  : 'utf8'
  }
};
