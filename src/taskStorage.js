let projects = [];

let projectArrays = {};
const home =[
    {
        title: 'ffff',
        discription: 'ffff',
        dueDate: 'ffff',
        status: 'ffff',
    },
    {
        title: 'ffff',
        discription: 'ffff',
        dueDate: 'ffff',
        status: 'ffff',
    },
    {
        title: 'ffff',
        discription: 'ffff',
        dueDate: 'ffff',
        status: 'ffff',
    }
]
const today =[
    {
        title: 'ddd',
        discription: 'ddd',
        dueDate: 'ddd',
        status: 'ddd',
    },
    {
        title: 'ddd',
        discription: 'ddd',
        dueDate: 'ddd',
        status: 'ddd',
    },
    {
        title: 'ddd',
        discription: 'ddd',
        dueDate: 'ddd',
        status: 'ddd',
    }
]
const weekly =[
    {
        title: 'dddfff',
        discription: 'dddfff',
        dueDate: 'dddfff',
        status: 'dddfff',
    },
    {
        title: 'dddfff',
        discription: 'dddfff',
        dueDate: 'dddfff',
        status: 'dddfff',
    },
    {
        title: 'dddfff',
        discription: 'dddfff',
        dueDate: 'dddfff',
        status: 'dddfff',
    }
]

const getTask = (section )=> {
    if(section == 'home'){
        return home;
        
    }
    else if(section == 'today'){
        return today;
    }
    else if (section == 'weekly') {
        return weekly;
    }
    else if (projects.includes(section)){
        return projectArrays[section]
    }
    else{
        console.log('non selected');
    }
};

const setTask = (section, obj) => {
    if(section == 'home'){
        home.push(obj)   
    }
    else if(section == 'today'){
         today.push(obj) 
    }
    else if (section == 'weekly') {
         weekly.push(obj) 
    }
    else if (projects.includes(section)){
        projectArrays[section].push(obj)
    }
    else{
        console.log('non selected');
    }
} 

const setProject = (section) => {
    projects.push(section);
    projectArrays[section]=[]
    console.log(projects)
    console.log(projectArrays)
}

const getProject = () => {
    return projects
}


export { getTask, setTask, setProject, getProject}