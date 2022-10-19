/* Genereate random users with data from faker-js */
import { faker } from '@faker-js/faker';
export const USERS = [];
const userCount = 8; //set initial users here
const CreateRandomUser = (id)=>{
    return {
      "id": id,
      "email": faker.internet.email(),
      "first_name": faker.name.firstName(),
      "last_name": faker.name.firstName(),
      "avatar": faker.image.avatar()
    }
}

/* users generating */
let i = 1;
Array.from({ length: userCount }).forEach(() => {
    USERS.push(CreateRandomUser(i++));
});