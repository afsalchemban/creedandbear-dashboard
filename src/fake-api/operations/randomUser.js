import { USERS } from '../database/users'
/* Return random user */
const randomUser = () => 
new Promise((resolve, reject) => {
    /* Response error if not found */
    if (USERS.length===0) {
      return setTimeout(
        () => reject(new Error('No users')),
        250
      );
    }
    /* Response user details after delay  */
    const randomUser = USERS[Math.floor(Math.random() * USERS.length)];
    setTimeout(() => resolve(randomUser), 1050);
  });



export default randomUser;