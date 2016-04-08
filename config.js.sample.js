/**
 * Created by scarlet on 16/3/27.
 */
module.exports = {
  mongodb: {
    host: 'localhost',
    db: 'MBlog'
  },
  redis: {
    host: 'localhost',
    port: 6379,
    database: 0
  },
  upyun: {
    formSecret: '',
    bucket: '',
    expiration: 60*10,
    callback: {
      host: '',
      path: ''
    }
  },
  qiniu:{
    scope:'',
    deadline:'',
  }
};
