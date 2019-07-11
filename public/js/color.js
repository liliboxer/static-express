const search = new URLSearchParams(window.location.search);
const name = search.get('name');

const root = document.getElementById('root');
const h1 = document.createElement('h1');
const p = document.createElement('p');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    h1.textContent = `${color.name}`;
    h1.classList.add(`${color.name}`);
    p.textContent = `${color.hex}, rgb: ${color.r} ${color.g} ${color.b}`;
  });

root.appendChild(h1);
root.appendChild(p);
