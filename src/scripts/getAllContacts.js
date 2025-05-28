// // export const getAllContacts = async () => {};

// // console.log(await getAllContacts());

// // step 5

import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log(contacts);
};

getAllContacts();
