import { USERS } from '../database/users'
const updateUser = (id,userInfo) =>
  new Promise((resolve, reject) => {
    /* Search for user */
    const searchuser = USERS.findIndex((user) => user.id===id);
    /* Response error if not user */
    if (searchuser===-1) {
      return setTimeout(
        () => reject(new Error('User not found')),
        250
      );
    }
    /* Validate data */
    if (!userInfo.first_name || !userInfo.last_name || !userInfo.email) {
        return setTimeout(
          () => reject(new Error('Not enough data')),
          250
        );
    }
    /* Update data to existing database */
    USERS[searchuser] = { ...USERS[searchuser], ...userInfo };

    /* Response after delay */
    const result = {
        "data": {
          "status": "success",
        }
      };
    setTimeout(() => resolve(result), 1050);
  });
export default updateUser;