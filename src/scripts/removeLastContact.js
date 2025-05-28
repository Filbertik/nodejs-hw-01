// export const removeLastContact = async () => {};

// removeLastContact();

// step 8
// const { readContacts } = require('../utils/readContacts');
// const { writeContacts } = require('../utils/writeContacts');
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

async function removeLastContact() {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('No contacts to remove');
    return;
  }

  contacts.pop();
  await writeContacts(contacts);

  console.log('Last contact removed');
}

removeLastContact();
