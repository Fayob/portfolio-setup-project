const body = document.querySelector('body')
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
    name: 'TO-DO LIST',
    description: "A to do list that helps you manage your daily task properly. you can add, edit, delete, check a task if completed, remove only completed task, remove any task you don't need on the list, etc. This project was developed using HTML, CSS and Javascript as the major language.",
    featuredImage: './assets/To-Do-Screenshot.JPG',
    desktopImage: './assets/To-Do-Screenshot.JPG',
    closeIcon: './assets/Enabled.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Webpack', 'GitHub', 'Terminal'],
    liveVersion: 'https://fayob.github.io/To-Do-List-Project/dist/',
    source: 'https://github.com/Fayob/To-Do-List-Project',
  },
  {
    id: '2',
    name: 'MATH MAGICIAN',
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    featuredImage: './assets/math_magician.png',
    desktopImage: './assets/math_magician.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['React', 'CSS', 'Javascript', 'Bootstrap', 'GitHub', 'Terminal', 'Git'],
    liveVersion: 'https://math-magician-app-by-fayob.netlify.app/',
    source: 'https://github.com/Fayob/maths-magician-app',
  },
  {
    id: '3',
    name: 'BUDGET APP',
    description: "Budget App is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    featuredImage: './assets/budget_app.png',
    desktopImage: './assets/budget_app.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Ruby', 'GitHub', 'Render', 'Bootstrap', 'Terminal', 'Codepen'],
    liveVersion: 'https://budget-app-rb45.onrender.com/',
    source: 'https://github.com/Fayob/budget-app',
  },
  {
    id: '4',
    name: 'BOOKING API',
    description: "Booking App is an api app to book an appointment with a coach. The user will be able to reserve a coach and book an appointment with him/her online.",
    featuredImage: './assets/booking_api.png',
    desktopImage: './assets/booking_api.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Ruby', 'Render', 'GitHub', 'Swagger', 'Terminal', 'Git'],
    liveVersion: 'https://booking-app-7i9f.onrender.com/api-docs',
    source: 'https://github.com/Fayob/Booking-App',
    // sourceIcon: './assets/Icon-Export.png',
    // liveVersionIcon: './assets/Vector.png',
  },
  {
    id: '5',
    name: 'TV SHOW',
    description: "A web app that lets you find out more about a group of TV shows. You can like and comment on your favorite shows. Second capstone project in Microverse. Built with JavaScript, WebPack, TvMaze API.",
    featuredImage: './assets/tv-show.png',
    desktopImage: './assets/tv-show.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Webpack', 'GitHub', 'Bootstrap', 'Terminal', 'Git'],
    liveVersion: 'https://karayamanemre.github.io/tv-shows-app/dist/',
    source: 'https://github.com/karayamanemre/tv-shows-app',
    // sourceIcon: './assets/Icon-Export.png',
    // liveVersionIcon: './assets/Vector.png',
  },
  {
    id: '6',
    name: 'FINANCE TRACKER',
    description: "Finance Tracker App is a web application where users can add stock value of companies to their portfolio and keep track them on a daily basis and they can as well search and add friends to their account. Users can check friend's profile and add stocks they don't have to their portfolio from their friend's profile page. Built with rails technology",
    featuredImage: './assets/stock_tracker.png',
    desktopImage: './assets/stock_tracker.png',
    closeIcon: './assets/Enabled.png',
    technologies: ['Ruby on rails', 'CSS', 'Javascript', 'PostgreSQL', 'GitHub', 'Bootstrap', 'Terminal', 'Git'],
    liveVersion: 'https://fayob.github.io/portfolio-setup-project/',
    source: 'https://github.com/Fayob/stock_tracker',
    // sourceIcon: './assets/Icon-Export.png',
    // liveVersionIcon: './assets/Vector.png',
  },
];

const projectSection = [
  {
    id: '1',
    heading: 'To-Do List',
    image: './assets/To-Do-Screenshot.JPG',
    alt: 'to-do list image',
    technologies: ['HTML', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    id: '2',
    heading: 'Math Magician',
    image: './assets/math_magician.png',
    alt: 'math-magician image',
    technologies: ['React', 'CSS', 'Javascript'],
    button: 'See Project',
  },
  {
    id: '3',
    heading: 'Budget App',
    image: './assets/budget_app.png',
    alt: 'budget-app image',
    technologies: ['Ruby', 'Ruby on rails', 'Bootstrap'],
    button: 'See Project',
  },
  {
    id: '4',
    heading: 'Booking App API',
    image: './assets/booking_api.png',
    alt: 'booking-api image',
    technologies: ['Swagger', 'Ruby', 'Ruby on rails'],
    button: 'See Project',
  },
  {
    id: '5',
    heading: 'Tv Show App',
    image: './assets/tv-show.png',
    alt: 'tv-show image',
    technologies: ['Javascript', 'HTML', 'CSS'],
    button: 'See Project',
  },
  {
    id: '6',
    heading: 'Finance Tracker',
    image: './assets/stock_tracker.png',
    alt: 'stock_tracker image',
    technologies: ['Bootstrap', 'Ruby', 'Ruby on rails'],
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
            <button type="button" data-id=${project.id} class="card_button button">
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
      body.classList.toggle('popup_open');

      img.addEventListener('click', () => {
        popUp.classList.remove('visible');
        body.classList.remove('popup_open')
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
