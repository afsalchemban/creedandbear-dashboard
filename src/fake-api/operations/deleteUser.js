import { USERS } from '../database/users'
const deleteUser = (deletedUsers) =>
  new Promise((resolve, reject) => {
    /* Loop through array to delete all users  */
    for (let i of deletedUsers) {

      const searchuser = USERS.findIndex((user) => user.id === i);
      if (searchuser === -1) {
        return setTimeout(
          () => reject(new Error('User not found')),
          250
        );
      }
      USERS.splice(searchuser, 1);
    }

    /* Response after delay */
    const result = {
      "data": {
        "status": "success",
      }
    };
    setTimeout(() => resolve(result), 1050);
  });
export default deleteUser;