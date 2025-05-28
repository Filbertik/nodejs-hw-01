// export const removeLastContact = async () => {};

// removeLastContact();

// step 8
const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');

const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length === 0) {
    console.log('No contacts to remove');
    return;
  }
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContact();
