'use strict';

const btn = document.querySelector('#jokeBtn');
const jokeEl = document.querySelector('#joke');

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch('http://icanhazdadjoke.com', config);
  const jsonData = await response.json();
  jokeEl.innerHTML = jsonData.joke;
  console.log(jsonData);
}

btn.addEventListener('click', generateJoke);
