module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
//     keys: env.array('APP_KEYS'),
       keys: ['QmbS9TivWOPeTOZDQxftEw==','aof5t2vUA2Kmi6OnQ4D7Cw==','ggk6QFoFn96OZNFJRb+Ugw==','LxhzLbk3MSjf0K+5IIMPNA=='],
  },
});
