import * as todo from '../logic/todo-state.js';
import {editAndOpenTaskDetailDialog, displayProjectSettingsDialog} from './dialog-box.js';
import {formatDate, deleteAllChildren} from './dom-functions.js';
import cogIcon from '../images/icons/cog.svg';

/**** Buttons ****/

// Add a cog icon at the top right of the screen to represent the project settings
function addProjectSettingsIcon() {
    const settingsIcon = new Image();
    settingsIcon.src = cogIcon;
    settingsIcon.classList.add('project-settings');
    settingsIcon.addEventListener('click', () => {
        displayProjectSettingsDialog();  
    })

    const projectActions = document.querySelector('.project-action-buttons');
    projectActions.appendChild(settingsIcon);
}

// Creates buttons for the webpage
function createButtons() {
    addProjectSettingsIcon();
}

// Removes the project settings button (cog icon) from webpage
function deleteButtons() {
    const settingsIcon = document.querySelector('.project-settings');
    settingsIcon ? settingsIcon.remove() : null;
}

// Returns a button that opens a task detail dialog box. Added to each task record
function getTaskDetailsButton(projIndex, taskIndex) {
    const detailButton = document.createElement('button');
    detailButton.classList.add('task-details');
    detailButton.textContent = 'Details';
    
    detailButton.addEventListener('click', (e) => {
        editAndOpenTaskDetailDialog(projIndex, taskIndex);
    })

    return detailButton;
}

/**** Display list of task ****/

// Creates a clickable checkbox object that represents the completion of a task
function createCheckbox(projIndex, taskIndex) {
    const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'completed');
    checkbox.classList.add('task-status-checkbox', 'clickable');
    
    checkbox.checked = taskObj.taskCompleted;

    checkbox.addEventListener('change', () => {
        taskObj.taskCompleted = checkbox.checked;
        todo.updateTaskFromIndex(projIndex, taskIndex, taskObj);
    })

    return checkbox;
}

// Creates a button that will delete the task object from the local storage
function createDeleteButton(projIndex, taskIndex) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-task-front-end');
    deleteButton.addEventListener('click', () => {
        todo.deleteTaskFromIndex(projIndex, taskIndex);
        updateDisplay();
    })
    
    return deleteButton;
}

// Returns a DOM object that contains the list of tasks based on projects or date. Used for main content of page
function getTasksDOM(taskList) {
    const allTasksContainer = document.createElement('div');
    allTasksContainer.classList.add('task-list');

    for (let i = 0; i < taskList.length; i++) {
        let projIndex;
        let taskIndex;
        let taskObj;
        const menuCategory = todo.getSelectedMenuCategory();
        
        if (menuCategory === 'tasksByDate') {
            const loc = taskList[i];
            projIndex = todo.getProjectIndex(loc);
            taskIndex = todo.getTaskIndex(loc);
            taskObj = todo.getTaskFromIndex(projIndex, taskIndex);
        } else if (menuCategory === 'projects') {
            projIndex = todo.getSelectedProjectIndex();
            taskIndex = i;
            taskObj = taskList[i];
        }

        const taskContainer = document.createElement('div');
        const taskUnorderedList = document.createElement('ul');
        const checkbox = createCheckbox(projIndex, taskIndex);
        const taskButtons = document.createElement('div');
        const taskDetailsButton = getTaskDetailsButton(projIndex, taskIndex);
        const deleteButton = createDeleteButton(projIndex, taskIndex);
        
        taskButtons.classList.add('task-actions-buttons');
        taskContainer.classList.add('task-container');
        taskUnorderedList.classList.add('task-properties');
        taskContainer.setAttribute('task-index', `${taskIndex}`);
        taskContainer.setAttribute('project-index', `${projIndex}`);

        taskButtons.appendChild(taskDetailsButton);
        taskButtons.appendChild(deleteButton);

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskUnorderedList); 
        taskContainer.appendChild(taskButtons);

        const properties = {title: 'title', dueDate: 'due-date', priority: 'priority'};

        for (let prop in properties) {
            const taskProperty = document.createElement('li');
            if (prop === 'dueDate') {
                taskProperty.textContent = formatDate(taskObj[prop]);
            } else if (prop === 'title') {
                taskProperty.textContent = taskObj[prop];
            } else if (prop === 'priority') {
                taskProperty.textContent = taskObj[prop];
                taskProperty.setAttribute('priority-level', taskObj[prop].toLowerCase());
            }
            taskProperty.classList.add('task-' + properties[`${prop}`]);
            taskUnorderedList.appendChild(taskProperty);
        }
        allTasksContainer.appendChild(taskContainer);
    }
    return allTasksContainer;
}

// Returns a DOM that includes the project or other menu category name and the list of tasks that is under them
function createProjectDOM(projectDOM) {
    if (!projectDOM) {
        const emptyProjectContainer = document.createElement('div');
        emptyProjectContainer.classList.add('project-container');
        return emptyProjectContainer;
    }

    const projectContainer = document.querySelector('.project-container');
    
    const projectTitle = document.createElement('p');
    projectTitle.classList.add('task-list-body-title');
    projectTitle.textContent = projectDOM.title;
    projectContainer.appendChild(projectTitle);
    
    const projectTasks = getTasksDOM(projectDOM.getTaskList());
    projectContainer.appendChild(projectTasks); 
}

// Populates the list of tasks on the main webpage depending on menu selection (e.g. any projects, "Today")
function displayTaskList() {  
    const selectedMenu = todo.getSelectedMenuCategory();

    if (selectedMenu === 'projects') {
        createProjectDOM(todo.getSelectedProject());
    } else if (selectedMenu === 'tasksByDate') {
        createTodayDOM(todo.getTasksDueToday());
    } else {
        createProjectDOM(todo.getSelectedProject());
    }
}

// Deletes the list of task on webpage
function deleteTaskDisplay() {
    const projectContainer = document.querySelector('.project-container');
    deleteAllChildren(projectContainer);
}

// Displays list of tasks due today
function createTodayDOM(taskList) {
    const projectContainer = document.querySelector('.project-container');

    if (Array.isArray(taskList) && !taskList.length) {
        return;
    }

    const periodTitle = document.createElement('p');
    periodTitle.classList.add('task-list-body-title');
    periodTitle.textContent = 'Today';
    projectContainer.appendChild(periodTitle);

    const todayTasks = getTasksDOM(taskList);
    projectContainer.appendChild(todayTasks);

}

/**** Menu ****/

// Displays the list of period related menu options on the Menu board (e.g. Today)
function displayPeriodsOnMenu() {
    const taskPeriodMenu = document.querySelector('.task-period-list-container');
    const periodList = document.createElement('ul');
    periodList.classList.add('period-list');

    const today = document.createElement('li');
    today.textContent = 'Today';
    today.classList.add('tasks-due-today', 'menu-sub-header');

    const settingsIcon = document.querySelector('.project-settings');

    if (todo.getSelectedMenuCategory() === 'tasksByDate') {
        today.classList.add('currently-selected-menu-item');
        settingsIcon.style.display = 'none';

    }

    today.addEventListener('click', () => {
        todo.setSelectedMenuCategory('tasksByDate');
        updateDisplay();
    });

    periodList.appendChild(today);
    taskPeriodMenu.appendChild(periodList);
}

// Deletes the period options on the menu board
function deletePeriodsOnMenu() {
    const taskPeriodMenu = document.querySelector('.task-period-list-container');
    deleteAllChildren(taskPeriodMenu);
}

// Replaces any space in text with a dash
function replaceSpaces(text) {
    return text.trim().replaceAll(' ', '-');
}

// Displays all the projects on the menu board and clicking on them displays the respective task list
function displayProjectsOnMenu() {
    const menu = document.querySelector('.project-list-container');
    const projectListItem = document.createElement('ul');
    projectListItem.classList.add('project-list-menu');
    const projectListArray = todo.getProjectList();
    const selectedProjectIndex = todo.getSelectedProjectIndex();
    const menuCategory = todo.getSelectedMenuCategory();
    for (let i = 0; i < projectListArray.length; i++) {
        const proj = projectListArray[i];
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-title', 'menu-sub-header', `${replaceSpaces(proj.title)}`);
        if (i === selectedProjectIndex && menuCategory === 'projects') {
            projectItem.classList.add('currently-selected-menu-item');
        }
        projectItem.setAttribute('projectIndex', `${i}`);
        projectItem.textContent = proj.title;
        projectItem.addEventListener('click', () => {
            todo.setNewSelectedProject(i);
            updateDisplay();
        });
        projectListItem.appendChild(projectItem);
    }

    menu.appendChild(projectListItem);
}

// Delete all the projects on the menu board
function deleteProjectsOnMenuDisplay() {
    const projectsMenu = document.querySelector('.project-list-container');
    deleteAllChildren(projectsMenu);
}

/**** Webpage Display ****/

// Displays all the contents onto the webpage
function displayAll() {
    displayTaskList();
    createButtons();
    displayProjectsOnMenu();
    displayPeriodsOnMenu();
}

// Deletes all the contents from the webpage
function deleteAll() {
    deleteTaskDisplay();
    deleteButtons();
    deleteProjectsOnMenuDisplay();
    deletePeriodsOnMenu()
}

// Refreshes all the contents on the webpage
function updateDisplay() {
    deleteAll();
    displayAll();
}

export {displayAll, updateDisplay};