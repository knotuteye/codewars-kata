/**
 *
 * @param {string} str
 * @returns
 */
function generateHashtag(str) {
  if (!str) return false;
  let hashtag = `#${str
    .split(" ")
    .filter((arr) => arr.length != 0)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("")}`;

  return hashtag.length > 140 || hashtag == "#" ? false : hashtag;
}

console.log(
  generateHashtag(
    "#Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
