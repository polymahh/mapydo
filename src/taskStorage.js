let projects = [];

const projectArrays = {};
let home = [
  {
    title: 'ffff1',
    discription: 'ffff',
    dueDate: 'ffff',
    status: false,
  },
  {
    title: 'ffff2',
    discription: 'ffff',
    dueDate: 'ffff',
    status: true,
  },
  {
    title: 'ffff3S',
    discription: 'ffff',
    dueDate: 'ffff',
    status: false,
  },
];
let today = [
  {
    title: 'ddd',
    discription: 'ddd',
    dueDate: 'ddd',
    status: false,
  },
  {
    title: 'ddd',
    discription: 'ddd',
    dueDate: 'ddd',
    status: false,
  },
  {
    title: 'ddd',
    discription: 'ddd',
    dueDate: 'ddd',
    status: false,
  },
];
let weekly = [
  {
    title: 'dddfff',
    discription: 'dddfff',
    dueDate: 'dddfff',
    status: false,
  },
  {
    title: 'dddfff',
    discription: 'dddfff',
    dueDate: 'dddfff',
    status: false,
  },
  {
    title: 'dddfff',
    discription: 'dddfff',
    dueDate: 'dddfff',
    status: false,
  },
];

const getTask = (section) => {
  let result;
  if (section === 'home') {
    result = home;
  } else if (section === 'today') {
    result = today;
  } else if (section === 'weekly') {
    result = weekly;
  } else if (projects.includes(section)) {
    result = projectArrays[section];
  } else {
    console.log('non selected');
  }
  return result;
};

const setTask = (section, obj) => {
  if (section === 'home') {
    home.push(obj);
  } else if (section === 'today') {
    today.push(obj);
  } else if (section === 'weekly') {
    weekly.push(obj);
  } else if (projects.includes(section)) {
    projectArrays[section].push(obj);
  } else {
    console.log('non selected');
  }
};

/* eslint-disable no-param-reassign */
const changeStatus = (title, state, section) => {
  if (section === 'home') {
    home.forEach((task) => {
      if (task.title === title) {
        task.status = state;
      }
    });
  } else if (section === 'today') {
    today.forEach((task) => {
      if (task.title === title) {
        task.status = state;
      }
    });
  } else if (section === 'weekly') {
    weekly.forEach((task) => {
      if (task.title === title) {
        task.status = state;
      }
    });
  } else if (projects.includes(section)) {
    projectArrays[section].forEach((task) => {
      if (task.title === title) {
        task.status = state;
      }
    });
  } else {
    console.log('non selected');
  }
};
/* eslint-disable no-param-reassign */

const setProject = (section) => {
  projects.push(section);
  projectArrays[section] = [];
  console.log(projects);
  console.log(projectArrays);
  // eslint-disable-next-line no-use-before-define
  updateLocalStorage();
};

const getProject = () => projects;

function updateLocalStorage() {
  localStorage.setItem('home', JSON.stringify(home));
  localStorage.setItem('today', JSON.stringify(today));
  localStorage.setItem('weekly', JSON.stringify(weekly));
  localStorage.setItem('projects', JSON.stringify(projects));
  if (projects.length > 0) {
    projects.forEach((element) => {
      localStorage.setItem(element, JSON.stringify(projectArrays[element]));
    });
  }
}
const checkLocalStorage = () => {
  if (localStorage.getItem('home')) {
    home = JSON.parse(localStorage.getItem('home'));
  }
  if (localStorage.getItem('today')) {
    today = JSON.parse(localStorage.getItem('today'));
  }
  if (localStorage.getItem('weekly')) {
    weekly = JSON.parse(localStorage.getItem('weekly'));
  }
  if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach((element) => {
      projectArrays[element] = JSON.parse(localStorage.getItem(element));
    });
  }
};
checkLocalStorage();
const emptyStorage = () => {
  localStorage.removeItem('home');
  localStorage.removeItem('today');
  localStorage.removeItem('weekly');
  localStorage.removeItem('projects');
  projects.forEach((element) => {
    localStorage.removeItem(element);
  });
};

export { getTask, setTask, setProject, getProject, changeStatus, emptyStorage };
