const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close_hamburger');
const hamburgerList = document.querySelectorAll('.hamburger_list');
const sideNav = document.querySelector('.side_nav');
const workSection = document.querySelector('.work_section');
const popUp = document.querySelector('.popup');
const email = document.getElementById('email');
const title = document.getElementById('name');
const description = document.getElementById('description');
const inTouch = document.querySelector('.form_button');

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
    name: 'To-Do List Project',
    description: "A to do list that helps you manage your daily task properly. you can add, edit, delete, check a task if completed, remove only completed task, remove any task you don't need on the list, etc. This project was developed using HTML, CSS and Javascript as the major language.",
    featuredImage: './assets/To-Do-Screenshot.JPG',
    desktopImage: './assets/To-Do-Screenshot.JPG',
    closeIcon: './assets/Enabled.png',
    technologies: ['html', 'css', 'Javascript', 'webpack', 'GitHub', 'Terminal'],
    liveVersion: 'https://fayob.github.io/To-Do-List-Project/dist/',
    source: 'https://github.com/Fayob/To-Do-List-Project',
  },
  {
    id: '2',
    name: 'Awesome Book Project',
    description: 'A website that helps to keep record of book title and its author. You can add, edit, delete any book of your choice. HTML, CSS and Javascript are the major technology used in this project.',
    featuredImage: './assets/Awesome-Book-screenshot.JPG',
    desktopImage: './assets/Awesome-Book-screenshot.JPG',
    closeIcon: './assets/Enabled.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://fayob.github.io/awesome-book-project/',
    source: 'https://github.com/Fayob/awesome-book-project',
  },
  {
    id: '3',
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    featuredImage: './assets/Snapshoot-Portfolio.png',
    desktopImage: './assets/Snapshoot-Portfolio-desktop.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
    technologies: ['Ruby on rails', 'css', 'Javascript', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
    technologies: ['Ruby on rails', 'css', 'Javascript', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
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
    technologies: ['Ruby on rails', 'css', 'Javascript', 'Codekit', 'GitHub', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/fayob/portfolio-setup-project',
    sourceIcon: './assets/Icon-Export.png',
    liveVersionIcon: './assets/Vector.png',
  },
];

const projectSection = [
  {
    id: '1',
    heading: 'To-Do List Project',
    image: './assets/To-Do-Screenshot.JPG',
    alt: 'to-do list image',
    technologies: ['html', 'css', 'javascript'],
    button: 'See Project',
  },
  {
    id: '2',
    heading: 'Awesome Book Project',
    image: './assets/Awesome-Book-screenshot.JPG',
    alt: 'awesome-book image',
    technologies: ['html', 'css', 'Javascript'],
    button: 'See Project',
  },
  {
    id: '3',
    heading: 'Multi-Post Stories Gain+Glory',
    image: '',
    alt: '',
    technologies: ['Ruby', 'Ruby on rails', 'React'],
    button: 'See Project',
  },
  {
    id: '4',
    heading: 'Multi-Post Stories Gain+Glory',
    image: '',
    alt: '',
    technologies: ['React', 'Ruby', 'Ruby on rails'],
    button: 'See Project',
  },
  {
    id: '5',
    heading: 'Multi-Post Stories Gain+Glory',
    image: '',
    alt: '',
    technologies: ['Ruby', 'Ruby on rails', 'React'],
    button: 'See Project',
  },
  {
    id: '6',
    heading: 'Multi-Post Stories Gain+Glory',
    image: '',
    alt: '',
    technologies: ['React', 'Ruby', 'Ruby on rails'],
    button: 'See Project',
  },
];

function Projects() {
  const header = document.createElement('h2');
  header.textContent = 'My Recent Works';
  workSection.appendChild(header);
  const div = document.createElement('div');
  div.classList.add('underline');
  workSection.appendChild(div);
  const anotherDiv = document.createElement('div');
  anotherDiv.classList.add('section_container');
  workSection.appendChild(anotherDiv);

  projectSection.forEach((project) => {
    anotherDiv.insertAdjacentHTML('beforeend', `
        <article class="card">
          <div class="img"><img src=${project.image} class="card_image" alt=${project.alt} /></div>
          <div class="details">
            <h5>${project.heading}</h5>
            <ul class="card_lists"> 
              ${project.technologies.map((tech) => `<li> ${tech} </li>`).join('')} 
            </ul>
            <button type="button" data-id=${project.id} class="card_button">
              ${project.button}
            </button>
          </div>
        </article>
    `);
  });

  const projectButtons = document.querySelectorAll('.card_button');
  projectButtons.forEach((project) => {
    project.addEventListener('click', () => {
      const popUpBody = document.createElement('article');
      popUpBody.classList.add('popup_body');
      popUp.appendChild(popUpBody);
      const popUpContainer = document.createElement('div');
      popUpContainer.classList.add('popup_container');
      popUpBody.appendChild(popUpContainer);
      const mainButton = projectList.find((info) => info.id === project.dataset.id);
      popUpContainer.innerHTML = `
    <img src=${mainButton.featuredImage} alt="main Image" class="popup_mobile" />
    <img src=${mainButton.desktopImage} alt="main Image" class="popup_desktop"/>
    <h1 class="popup_heading">${mainButton.name}</h1>
    <ul class="popup_lists">
    ${mainButton.technologies.slice(0, 4).map((tech) => `<li class="popup_list">${tech}</li>`).join('')}
    </ul> 
    <ul class="popup_desktop_lists">
    ${mainButton.technologies.map((tech) => `<li class="popup_desktop_list"> ${tech} </li>`).join('')}
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
      popUp.classList.add('visible');

      img.addEventListener('click', () => {
        popUp.classList.remove('visible');
      });
    });
  });
}

Projects();

inTouch.addEventListener('click', () => {
  const emailValue = email.value;

  if (emailValue.trim() === '' || emailValue !== emailValue.toLowerCase()) {
    email.setCustomValidity('Please supply a valid email address in lower case');
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});

document.addEventListener('input', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const titleValue = title.value;
  const descriptionValue = description.value;
  const userInput = {
    title: titleValue,
    email: emailValue,
    description: descriptionValue,
  };

  localStorage.setItem('userInfo', JSON.stringify(userInput));
});

document.addEventListener('DOMContentLoaded', () => {
  const getValue = JSON.parse(localStorage.getItem('userInfo'));
  title.value = getValue.title;
  email.value = getValue.email;
  description.value = getValue.description;
});
