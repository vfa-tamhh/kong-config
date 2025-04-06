const jwt = require('jsonwebtoken');

const token = jwt.sign(
  {
    iss: 'Z2tKh3hUwcM5EH0Uy44Y4OSK6U7L8Rt6', // key
    exp: Math.floor(Date.now() / 1000) + 60 * 60
  },
  'YeADDQZhD3hu31DuIAVUvTHE8vLdE7RQ' // secret
);

console.log(token);
// docker rmi -f $(docker images -aq)