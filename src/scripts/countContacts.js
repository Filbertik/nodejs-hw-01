// // export const countContacts = async () => {};

// // console.log(await countContacts());

// // step 6

import { readContacts } from '../utils/readContacts.js';

const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Total contacts: ${contacts.length}`);
};

countContacts();
