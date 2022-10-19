import { USERS } from '../database/users'
const getUser = (id) =>
  new Promise((resolve, reject) => {
    /* Search for user by id */
    const searchuser = USERS.findIndex((user) => user.id===id);
    /* Response error if not found */
    if (searchuser===-1) {
      return setTimeout(
        () => reject(new Error('User not found')),
        250
      );
    }
    /* Response user details after delay  */
    setTimeout(() => resolve(USERS[searchuser]), 1050);
  });
export default getUser;