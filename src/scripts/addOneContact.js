import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentContact = await readContacts();
  const addedContact = createFakeContact();
  await writeContacts([...currentContact, addedContact]);
};

addOneContact();
