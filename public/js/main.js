const root = document.getElementById('root');
const colorList = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `/color.html?name=${color.name}`;
      a.textContent = `${color.name}`;
      a.classList.add(`${color.name}`);
      li.appendChild(a);
      colorList.appendChild(li);
    });
  });

root.appendChild(colorList);
