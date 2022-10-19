/* Genereate random users with data from faker-js */
import { faker } from '@faker-js/faker';
export const USERS = [];
const CreateRandomUser = (id)=>{
    return {
      "id": id,
      "email": faker.internet.email(),
      "first_name": faker.name.firstName(),
      "last_name": faker.name.firstName(),
      "avatar": faker.image.avatar()
    }
}

/* 30 users generating */
let i = 1;
Array.from({ length: 8 }).forEach(() => {
    USERS.push(CreateRandomUser(i++));
});