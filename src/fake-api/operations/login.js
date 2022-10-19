import { USERS } from '../database/users'
const login = (email,password) =>
  new Promise((resolve, reject) => {
    /* check user exist and password is right */
    const searchuser = USERS.findIndex((user) => user.email===email);
    if (searchuser===-1||password !== '123456') {
      return setTimeout(
        () => reject(new Error('Incorrect Username or Password')),
        250
      );
    }
    /* Response after delay */
    const result = {
      "data": {
        "status": "success",
        "user": USERS[searchuser]
      }
    };
    setTimeout(() => resolve(result), 1050);
  });
export default login;