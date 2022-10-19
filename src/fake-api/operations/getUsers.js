import { USERS } from '../database/users'
import { paginate } from '../pagination/pagination';
const getUsers = (page,query='') =>
  new Promise((resolve, reject) => {
    if (!USERS) {
      return setTimeout(
        () => reject(new Error('Users not found')),
        250
      );
    }
    /* if no search query return all Users */
    if(query===''){
      setTimeout(() => resolve(paginate(USERS,page)), 1050);
    }
    else{
      /* Return filtered users when query is available */
      const filtered = USERS.filter(user=>{
        return (user.first_name.toLowerCase().includes(query.toLowerCase())||user.last_name.toLowerCase().includes(query.toLowerCase()));
      })
      setTimeout(() => resolve(paginate(filtered,page,USERS.length)), 1050); // keep USERS.length as total when we are filtering
    }
});
export default getUsers;