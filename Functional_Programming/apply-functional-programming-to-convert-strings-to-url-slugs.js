// Only change code below this line
function urlSlug(title) {
  let slug = title.trim();
  slug = slug.split(/\s+/);
  slug = slug.map(word => word.toLowerCase())
  slug = slug.join("-");
  return slug;
}
// Only change code above this line

console.log(urlSlug(" Winter Is  Coming")); 