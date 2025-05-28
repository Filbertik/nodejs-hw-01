// // export const addOneContact = async () => {};

// // addOneContact();

// // step 4

import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const addOneContact = async () => {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  await writeContacts(contacts);
  console.log('1 contact added successfully');
};

addOneContact();
