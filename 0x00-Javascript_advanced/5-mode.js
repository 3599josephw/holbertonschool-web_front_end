function changeMode(size, weight, transform, background, color) {
  return () => {
    let style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule(`html {font-size: ${size}; font-weight: ${weight}; text-transform: ${transform}; background-color: ${background}; color: ${color}}`);
  }
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(9, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const para = document.createElement("p");
  para.innerText = "Welcome Holberton!";
  document.body.append(para);

  const spookyButton = document.createElement('button');
  spookyButton.innerText = "Spooky";
  document.body.append(spookyButton);

  const darkButton = document.createElement('button');
  darkButton.innerText = "Dark mode";
  document.body.append(darkButton);

  const screamButton = document.createElement('button');
  screamButton.innerText = "Scream mode";
  document.body.append(screamButton);

  spookyButton.addEventListener('click', spooky);
  darkButton.addEventListener('click', darkMode);
  screamButton.addEventListener('click', screamMode);
}

main();