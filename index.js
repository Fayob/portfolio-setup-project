// import projectList from './data.js';

const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close_hamburger');
const hamburgerList = document.querySelectorAll('.hamburger_list');
const sideNav = document.querySelector('.side_nav');
const projectButtons = document.querySelectorAll('.card_button');
const popUpContainer = document.querySelector('.popup_container');

hamburger.addEventListener('click', () => {
  sideNav.classList.add('visible');
});

closeHamburger.addEventListener('click', () => {
  sideNav.classList.remove('visible');
});

hamburgerList.forEach((list) => list.addEventListener('click', () => {
  sideNav.classList.remove('visible');
}));

const projectList = [
  {
    id: '1',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'github.com/fayob/portfolio-setup-project',
  },
  {
    id: '2',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'github.com/fayob/portfolio-setup-project',
  },
  {
    id: '3',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/fayob/portfolio-setup-project',
    liveVersionIcon: './assets/Icon-Export.png',
    sourceIcon: './assets/Vector.png',
  },
  {
    id: '4',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/fayob/portfolio-setup-project',
    sourceIcon: './assets/Icon-Export.png',
    liveVersionIcon: './assets/Vector.png',
  },
  {
    id: '5',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/fayob/portfolio-setup-project',
    sourceIcon: './assets/Icon-Export.png',
    liveVersionIcon: './assets/Vector.png',
  },
  {
    id: '6',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: {
      ruby: 'Ruby on rails',
      css: 'css',
      javascript: 'Javascript',
      codekit: 'Codekit',
      github: 'GitHub',
      bootstrap: 'Bootstrap',
      terminal: 'Terminal',
      codepen: 'Codepen',
    },
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/fayob/portfolio-setup-project',
    sourceIcon: './assets/Icon-Export.png',
    liveVersionIcon: './assets/Vector.png',
  },
];

projectButtons.forEach((project) => {
  project.addEventListener('click', () => {
    const mainButton = projectList.find((info) => info.id === project.dataset.id);
    popUpContainer.innerHTML = `
    <img src=${mainButton.featuredImage} alt="main Image" class="popup_mobile" />
    <img src=${mainButton.desktopImage} alt="main Image" class="popup_desktop"/>
    <h1 class="popup_heading">${mainButton.name}</h1>
    <ul class="popup_lists">
    <li class="popup_list">${mainButton.technologies.ruby}</li>
    <li class="popup_list">${mainButton.technologies.css}</li>
    <li class="popup_list">${mainButton.technologies.javascript}</li>
    </ul>
    <ul class="popup_desktop_lists">
    <li class="popup_desktop_list">${mainButton.technologies.codekit}</li>
    <li class="popup_desktop_list">${mainButton.technologies.github}</li>
    <li class="popup_desktop_list">${mainButton.technologies.javascript}</li>
    <li class="popup_desktop_list">${mainButton.technologies.bootstrap}</li>
    <li class="popup_desktop_list">${mainButton.technologies.terminal}</li>
    <li class="popup_desktop_list">${mainButton.technologies.codepen}</li>
    </ul>
    <p class="popup_description">${mainButton.description}</p>
    <div class="popup_buttons">
    <a href=${mainButton.liveVersion} class="popup_button"> See Live <img src="./assets/Icon-Export.png" alt="live icon" class="popup_icon" /> </a>
    <a href=${mainButton.source} class="popup_button"> See Source <img src="./assets/Vector.png" alt="source icon" class="popup_icon" /> </a>
    </div>
    `;
    const img = document.createElement('img');
    img.src = './assets/Enabled.png';
    img.alt = 'close icon';
    img.classList.add('close_popup');
    popUpContainer.appendChild(img);
    popUpContainer.classList.add('visible');

    img.addEventListener('click', () => {
      popUpContainer.classList.remove('visible');
    });
  });
});
