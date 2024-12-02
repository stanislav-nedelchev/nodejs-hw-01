import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const readContactsList = await readContacts();
  return readContactsList.length;
};

console.log(await countContacts());
