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
function createCheckbox(taskObj) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'completed');
    checkbox.classList.add('task-status-checkbox');

    checkbox.checked = taskObj.isTaskCompleted();

    checkbox.addEventListener('change', () => {
        taskObj.setTaskStatus(checkbox.checked);
    })

    return checkbox;
}

function getTasksDOM(taskList) {
    const allTasksContainer = document.createElement('div');

    for (let i = 0; i < taskList.length; i++) {
        const taskObj = taskList[i];
        const taskContainer = document.createElement('div');
        const taskUnorderedList = document.createElement('ul');
        const checkbox = createCheckbox(taskObj);
        const taskDetailsButton = getTaskDetailsButton(i);
        
        taskContainer.classList.add('task-container');
        taskContainer.setAttribute('task-index', `${i}`);

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskUnorderedList); 
        taskContainer.appendChild(taskDetailsButton);

        const properties = {title: 'title', dueDate: 'due-date'};

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