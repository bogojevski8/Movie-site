'use strict';

// 'Coming soon in theaters' section carousel

const Containers = [...document.querySelectorAll('.carousel-content')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

Containers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

// 'Top picks' section carousel

const topPicksContainerrs = [
  ...document.querySelectorAll('.topPicks-containerr'),
];
const nxxtBtn = [...document.querySelectorAll('.nxxt-btn')];
const preeBtn = [...document.querySelectorAll('.pree-btn')];

topPicksContainerrs.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preeBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});

// Tv-Series API

fetch(
  'https://online-movie-database.p.rapidapi.com/auto-complete?q=e=tv-series',
  {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8302b4c614msh1c6ec45653b6a05p17a1b3jsn7ad4cc0e3c28',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  }
)
  .then(response => response.json())
  .then(data => {
    const list = data.d;
    list.map(item => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const tvSeries = `<li><img src="${poster}"><h2>${name}</h2></li>`;
      document.querySelector('.tvSeries').innerHTML += tvSeries;
    });
  })
  .catch(err => {
    console.error(err);
  });

// Login

const wrapper = document.querySelector('.wrapper-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
