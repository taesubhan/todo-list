import * as todo from '../logic/todo-state.js';
import {editAndOpenTaskDetailDialog} from './dialog-box.js';

const taskListDOM = document.querySelector('.project-tasks');

function getTaskDetailsButton(taskIndex) {
    const detailButton = document.createElement('button');
    detailButton.classList.add('task-details');
    detailButton.textContent = 'Details';
    
    detailButton.addEventListener('click', (e) => {
        editAndOpenTaskDetailDialog(taskIndex);
        // console.log(todo.getProjectList());
    })
    return detailButton;
}

/* Display list of task */
function getTasksDOM(taskList) {
    const allTasksContainer = document.createElement('div');

    for (let i = 0; i < taskList.length; i++) {
        const taskContainer = document.createElement('div');
        const taskUnorderedList = document.createElement('ul');
        const taskDetailsButton = getTaskDetailsButton(i);
        const taskObj = taskList[i];

        taskContainer.classList.add('task-container');
        taskContainer.setAttribute('task-index', `${i}`);

        taskContainer.appendChild(taskUnorderedList); 
        taskContainer.appendChild(taskDetailsButton);
        // const properties = ['title', 'description', 'dueDate', 'priority'];
        const properties = {title: 'title', description: 'description', dueDate: 'due-date', priority: 'priority'};

        for (let prop in properties) {
            const taskProperty = document.createElement('li');
            taskProperty.textContent = taskObj[`${prop}`];
            taskProperty.classList.add('task-' + properties[`${prop}`]);
            taskUnorderedList.appendChild(taskProperty);
        }
        allTasksContainer.appendChild(taskContainer);
    }
    return allTasksContainer;
}

// function getProjectsDOM(projectList) {
//     const allProjectsContainer = document.createElement('div');
//     allProjectsContainer.classList.add('project-list');

//     for (let proj of projectList) {
//         const projectContainer = document.createElement('div');
        
//         const projectTitle = document.createElement('p');
//         projectTitle.textContent = proj.title;
//         projectContainer.appendChild(projectTitle);
        
//         const projectTasks = getTasksDOM(proj.getTaskList());
//         projectContainer.appendChild(projectTasks); 
        
//         allProjectsContainer.appendChild(projectContainer);
//     }

//     return allProjectsContainer;
// }

function getProjectDOM(projectDOM) {
    if (projectDOM === null) {
        const emptyProjectContainer = document.createElement('div');
        emptyProjectContainer.classList.add('project-container');
        return emptyProjectContainer;
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectDOM.title;
    projectContainer.appendChild(projectTitle);
    
    const projectTasks = getTasksDOM(projectDOM.getTaskList());
    projectContainer.appendChild(projectTasks); 

    return projectContainer;
}

function displayTaskList() {
    const projectDOM = getProjectDOM(todo.getSelectedProject());
    taskListDOM.appendChild(projectDOM);
}

/* Delete and update task display */
function deleteTaskDisplay() {
    const projectContainer = document.querySelector('.project-container');
    taskListDOM.removeChild(projectContainer);
}

function updateTaskDisplay() {
    deleteTaskDisplay();
    displayTaskList();
}

/* Display list of projects in menu */

function replaceSpaces(text) {
    return text.trim().replace(' ', '-');
}

function displayProjectsOnMenu() {
    const menu = document.querySelector('.project-list-container');
    const projectListItem = document.createElement('ul');
    projectListItem.classList.add('project-list-menu')
    const projectListArray = todo.getProjectList();
    for (let i = 0; i < projectListArray.length; i++) {
        const proj = projectListArray[i];
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-title', `${replaceSpaces(proj.title)}`);
        projectItem.setAttribute('projectIndex', `${i}`);
        projectItem.textContent = proj.title;
        projectItem.addEventListener('click', () => {
            todo.setSelectedProject(proj);
            updateDisplay();
            // console.log(todo.selectedProject);
        });
        projectListItem.appendChild(projectItem);
    }

    menu.appendChild(projectListItem);
}

function deleteProjectsOnMenuDisplay() {
    const menu = document.querySelector('.project-list-container');
    const projectListItem = document.querySelector('.project-list-menu');
    menu.removeChild(projectListItem);
}

function updateProjectMenuDisplay() {
    deleteProjectsOnMenuDisplay();
    displayProjectsOnMenu();
}

/* Update for all data on the webpage */

function updateDisplay() {
    updateTaskDisplay();
    updateProjectMenuDisplay();
}

export {displayTaskList, displayProjectsOnMenu, updateDisplay};