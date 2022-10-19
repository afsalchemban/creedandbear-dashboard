import { USERS } from '../database/users'
/* Return random user */
const randomUser = (id,userInfo) => USERS[Math.floor(Math.random() * USERS.length)];
export default randomUser;