// // export const removeAllContacts = async () => {};

// // removeAllContacts();

// // step 7

import { writeContacts } from '../utils/writeContacts.js';

async function removeAllContacts() {
  await writeContacts([]);
  console.log('All contacts removed');
}

removeAllContacts();
