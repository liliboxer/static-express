const search = new URLSearchParams(window.location.search);
const name = search.get('name');

console.log(name);

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(console.log('hi'));
