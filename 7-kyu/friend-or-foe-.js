/**
 * You can use this tool to extract your friends' names that are exactly four letters long.
 * @param {Array<string>} friends
 * @return {Array<string>|string}
 */
function friend(friends) {
  if (!Array.isArray(friends)) {
    return 'The "friends" parameter needs to be an array of strings';
  }
  return friends.filter((friendName) => friendName.length === 4);
}
