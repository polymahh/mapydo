import './css/skeleton.css';
import './css/normalize.css';
import {
  getTask,
  setTask,
  setProject,
  getProject,
  changeStatus,
  emptyStorage,
} from './taskStorage';

(function () {
  class Task {
    constructor(title, discription, dueDate, status) {
      this.title = title;
      this.discription = discription;
      this.dueDate = dueDate;
      this.status = status;
    }
  }
  const mappyDo = {
    currentSection: '',
    mySection: [],

    init() {
      this.casheDom();
      this.bindEvents();
      this.render();
      this.callStorage('home');
    },
    casheDom() {
      this.homeButton = document.getElementById('home');
      this.todayButton = document.getElementById('today');
      this.weeklyButton = document.getElementById('weekly');
      this.tasks = document.getElementById('tasks');
      this.addTask = document.getElementById('taskButton');
      this.taskForm = document.getElementById('taskForm');
      this.closeTask = document.getElementById('close');
      this.saveTask = document.getElementById('save');
      this.addProject = document.getElementById('projectButton');
      this.projectForm = document.getElementById('projectForm');
      this.closeProject = document.getElementById('projectClose');
      this.saveProject = document.getElementById('projectSave');
      this.sectionTitle = document.getElementById('sectionTitle');
      // task object
      this.title = document.getElementById('taskTitle');
      this.discription = document.getElementById('taskDescription');
      this.dueDate = document.getElementById('dueDate');
      // this.status = document.getElementById("")
      // project

      this.projectTitle = document.getElementById('projectTitle');
      this.projectList = document.getElementById('projectList');
      this.dStorage = document.getElementById('dStorage');

      // // sliding menu
      this.menuButton = document.getElementById('dropDown');
      this.slidingMenu = document.getElementById('slidingMenu');
    },
    bindEvents() {
      this.homeButton.addEventListener('click', () => this.callStorage('home'));
      this.todayButton.addEventListener('click', () =>
        this.callStorage('today')
      );
      this.weeklyButton.addEventListener('click', () =>
        this.callStorage('weekly')
      );
      this.addTask.addEventListener('click', () => this.showTaskForm());
      this.closeTask.addEventListener('click', (e) => this.hideTaskForm(e));
      this.saveTask.addEventListener('click', (e) => this.hideTaskForm(e));
      this.addProject.addEventListener('click', () => this.showProjectForm());
      this.closeProject.addEventListener('click', (e) =>
        this.hideProjectForm(e)
      );
      this.saveProject.addEventListener('click', (e) =>
        this.hideProjectForm(e)
      );
      this.projectList.addEventListener('click', (e) =>
        this.callStorage(e.target.id)
      );
      this.dStorage.addEventListener('click', () => emptyStorage());
      this.tasks.addEventListener('click', (e) => this.showDetails(e.target));
      this.menuButton.addEventListener('mouseover', () => {
        this.slidingMenu.style.transform = 'scale(1,1)';
      });
      this.menuButton.addEventListener('mouseout', () => {
        this.slidingMenu.style.transform = 'scale(1,0)';
      });
    },
    render() {
      this.tasks.innerHTML = '';
      this.projectList.innerHTML = '';
      const projects = getProject();
      if (projects.length > 0) {
        projects.forEach((project) => this.showProject(project));
      }
      this.mySection.forEach((element) => this.showTask(element));
    },
    callStorage(section) {
      // with this we know what project we are in
      this.currentSection = section;
      this.mySection = getTask(section);
      this.sectionTitle.innerHTML = section.toUpperCase();
      this.render();
    },
    showTask(task) {
      const taskContainer = document.createElement('div');
      taskContainer.id = task.title;

      const taskTitle = document.createElement('div');
      taskTitle.textContent = task.title;
      const taskDueDate = document.createElement('div');
      taskDueDate.textContent = task.dueDate;
      const taskStatus = document.createElement('div');
      taskStatus.textContent = task.status;
      const taskdelete = document.createElement('input');
      taskdelete.setAttribute('type', 'checkbox');
      taskdelete.checked = task.status;
      if (taskdelete.checked === false) {
        taskContainer.className = 'taskbox';
      } else taskContainer.className = 'taskbox done';
      taskdelete.id = 'done';

      taskdelete.addEventListener('change', (e) => {
        if (e.target.checked === false) {
          taskContainer.className = 'taskbox';
          changeStatus(task.title, false, this.currentSection);
        } else if (e.target.checked === true) {
          taskContainer.className = 'taskbox done';
          changeStatus(task.title, true, this.currentSection);
        } else console.log('something is wrong');
      });

      taskContainer.append(taskTitle, taskDueDate, taskStatus, taskdelete);
      this.tasks.appendChild(taskContainer);
    },
    showDetails(traget) {
      console.log(traget);
    },
    showProject(project) {
      const projectContainer = document.createElement('div');
      projectContainer.innerHTML = project;
      projectContainer.setAttribute('id', project);
      projectContainer.setAttribute('class', 'button');

      this.projectList.appendChild(projectContainer);
    },
    showTaskForm() {
      this.taskForm.style.display = 'block';
    },
    hideTaskForm(e) {
      if (e.target.id === 'close') {
        console.log('close');
        this.taskForm.style.display = 'none';
      } else if (e.target.id === 'save') {
        console.log('save');
        const newTask = new Task(
          this.title.value,
          this.discription.value,
          this.dueDate.value,
          ''
        );
        setTask(this.currentSection, newTask);
        this.taskForm.style.display = 'none';
        this.callStorage(this.currentSection);
      }
    },
    showProjectForm() {
      this.projectForm.style.display = 'inline';
    },
    hideProjectForm(e) {
      if (e.target.id === 'projectClose') {
        console.log('close');
        this.projectForm.style.display = 'none';
      } else if (e.target.id === 'projectSave') {
        if (this.projectTitle.value !== '') {
          console.log('save');
          setProject(this.projectTitle.value);
          this.projectForm.style.display = 'none';
          this.projectTitle.value = '';
          this.callStorage(this.currentSection);
        } else {
          this.projectForm.style.display = 'none';
        }
      }
    },
    taskDiscripton(task) {
      console.log('discription');
    },
  };

  mappyDo.init();
})();

console.log('working');
