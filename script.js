'use strict';

const btn = document.querySelector('#jokeBtn');
const jokeEl = document.querySelector('#joke');

generateJoke();

async function generateJoke() {
  const config = {
    // method: 'GET',
    // headers: {
    //   'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //   'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
    // },
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch('http://icanhazdadjoke.com', config);
  const jsonData = await response.json();
  jokeEl.innerHTML = jsonData.joke;

  // const response = await fetch(
  //   'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731',
  //   config
  // );
  // const jsonData = await response.json();
  // console.log(jsonData);
  // jokeEl.innerHTML = jsonData.text;
}

btn.addEventListener('click', generateJoke);
