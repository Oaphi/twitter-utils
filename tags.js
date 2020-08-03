/**
 * @summary joins an array of tags into space-separate string of hashed tags
 * 
 * @example
 *  ["tag1", "tag2"] -> "#tag1 #tag2"
 * 
 * @param {string[]} [tags] 
 * @returns {string}
 */
const tagsToHashedString = (tags = []) => tags.map(t => `#${t}`).join(" ");

export {
  tagsToHashedString
};
