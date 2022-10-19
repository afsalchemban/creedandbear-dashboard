import { faker } from '@faker-js/faker';
import { USERS } from '../database/users'
const addUser = (userInfo) =>
  new Promise((resolve, reject) => {

    /* Validating data */
    if (!userInfo.first_name || !userInfo.last_name || !userInfo.email) {
      return setTimeout(
        () => reject(new Error('Not enough data')),
        250
      );
    }

    /* Calculating lastId used to generate new id  */
    let lastId;
    if(USERS.length>0)
    {
      const user = USERS.reduce(function(prev, current) {
        return (prev.id > current.id) ? prev : current
      })
      lastId=user.id
    }
    else{
      lastId = 0;
    }

    /* Push new user to the User database */
    USERS.push(
        {
            "id": lastId+1,
            "email": userInfo.email,
            "first_name": userInfo.first_name,
            "last_name": userInfo.last_name,
            "avatar": faker.image.avatar()
          }
    );

    /* Response after delay */
    const result = {
        "data": {
          "status": "success",
        }
      };
    setTimeout(() => resolve(result), 1050);
  });
export default addUser;