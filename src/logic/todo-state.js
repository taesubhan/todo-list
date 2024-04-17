import {task, taskFromJSON} from './task.js';
import {project, projectFromJSON} from './projects.js';
import {format} from 'date-fns';

/**** Projects ****/

// Used in JSON.parse function to convert the string value to respective object
function reviver(key, value) {
    if (value.isProjectObj) {
        return projectFromJSON(value);
    } else if (value.isTaskObj) {
        return taskFromJSON(value);
    } else {
        return value;
    }
}

// Retrieve a list of projects from local storage
export function getProjectList() {
    if (localStorage.getItem('projectList')) {
        return JSON.parse(localStorage.getItem('projectList'), reviver);
    } else {
        return [];
    }
}


// Retrieve a list of project names from the local storage
export function getProjectNames() {
    const projectList = getProjectList();
    return projectList.map((project) => project.title);
}

// Accepts an array of projects and stores it as the official project list in the local storage
function setProjectList(projList) {
    localStorage.setItem('projectList', JSON.stringify(projList));
}

// Creates and returns a new project object
export function createProject(title) {
    return project(title);
}

// Adds a new project into the list of projects in local storage
export function addProject(newProject) {
    const projects = getProjectList();
    if (projects.map((proj) => proj.title).includes(newProject.title)) {
        return;
    }
    projects.push(newProject);
    setProjectList(projects);
}

// Retrieves a project from local storage based on project array index
export function getProject(index) {
    return getProjectList()[index];
}

// Deletes the project in local storage based on given input
function deleteProject(index) {
    const projects = getProjectList();
    if (index < projects.length) {
        projects.splice(index, 1);
        setProjectList(projects);
    }
}

/**** Tasks ****/

// Create a task object
export function createTask(title, description, dueDate, priority) {
    return task(title, description, dueDate, priority);
}

// Adds a task object to a selected project object in local storage
export function addTaskToProject(projIndex, taskObj) {
    const projects = getProjectList();
    projects[projIndex].addTask(taskObj);
    setProjectList(projects);
}

// Returns the task status of a given task object
export function getTaskStatus(taskObj) {
    return taskObj.taskCompleted ? 'Completed' : 'Incomplete';
}

// Returns a specified task object from a specified project object in local storage
export function getTaskFromIndex(projIndex, taskIndex) {
    return getProjectList()[projIndex].getTaskList()[taskIndex];
}

// Replaces a specified task from a specified project with a new task object
export function updateTaskFromIndex(projIndex, taskIndex, taskObj) {
    const projectList = getProjectList();
    projectList[projIndex].setTask(taskIndex, taskObj);
    setProjectList(projectList);
}

// Deletes a specified task from a specified project
export function deleteTaskFromIndex(projIndex, taskIndex) {
    const project = getProject(projIndex);
    project.deleteTask(taskIndex);
    updateSelectedProject(project);
}

/**** Currently Selected Objects ****/

// Returns the currently selected menu category (e.g. projects, tasksByDate) from local storage
export function getSelectedMenuCategory() {
    return localStorage.getItem('selectedMenuCategory');
}

// Sets a new selected menu category in local storage
export function setSelectedMenuCategory(menuCategory) {
    localStorage.setItem('selectedMenuCategory', menuCategory);
}

// Returns the array index of the currently selected project
export function getSelectedProjectIndex() {
    return parseInt(localStorage.getItem('selectedProjectIndex'));
}

// Returns the currently selected project object
export function getSelectedProject() {
    return getProject(getSelectedProjectIndex());
}

// Defines a new currently selected project
export function setNewSelectedProject(projectIndex) {
    setSelectedMenuCategory('projects');
    localStorage.setItem('selectedProjectIndex', projectIndex);
}

// Replaces the currently selected project with another project object
export function updateSelectedProject(projectObj) {
    const index = parseInt(localStorage.getItem('selectedProjectIndex'));
    const projectList = getProjectList();
    projectList[index] = projectObj;
    setProjectList(projectList);
}

// Delete the currently selected project from the local storage
export function deleteSelectedProject() {
    const currentProjectIndex = parseInt(localStorage.getItem('selectedProjectIndex'));
    deleteProject(currentProjectIndex);
}

// Change the name of the currently selected project object
export function editSelectedProjectName(newName) {
    const selectedProject = getSelectedProject();
    selectedProject.title = newName;
    updateSelectedProject(selectedProject);
}

// Returns a specified task object from the currently selected project
export function getTaskFromSelectedProject(index) {
    return getSelectedProject().getTask(index);
}

// Replaces a task from the currently selected project with a new task object
export function updateTaskFromSelectedProject(taskIndex, taskObj) {
    const selectedProj = getSelectedProject();
    selectedProj.setTask(taskIndex, taskObj);
    updateSelectedProject(selectedProj);
}

// Add a task object to the currently selected project object
export function addTaskToSelectedProject(taskObj) {
    const selectedProj = getSelectedProject();
    selectedProj.addTask(taskObj);
    updateSelectedProject(selectedProj);
}

// Delete a specified task object from the currently selected project object
export function deleteTaskFromSelectedProject(index) {
    const selectedProj = getSelectedProject();
    selectedProj.deleteTask(index);
    updateSelectedProject(selectedProj);
}

/**** Date ****/

// Returns today's date
function getToday() {
    const dateFormat = 'yyyy-MM-dd';
    const date = new Date();
    return format(date, dateFormat);
}

// Returns an array of objects that each represents the coordinates of a task object that have a due date of today
export function getTasksDueToday() {
    const taskToday = [];
    const projectList = getProjectList();
    for (let p = 0; p < projectList.length; p++) {
        const taskList = projectList[p].getTaskList();
        for (let t = 0; t < taskList.length; t++) {
            if (taskList[t].dueDate === getToday()){
                taskToday.push({
                    'projectIndex': p,
                    'taskIndex': t
                })
            }
        }
    }

    return taskToday;
}

// Extracts the project index from the result of the function: getTasksDueToday()
export function getProjectIndex(item) {
    return item['projectIndex'];
}

// Extracts the task index from the result of the function: getTasksDueToday()
export function getTaskIndex(item) {
    return item['taskIndex'];
}



/**** Dummy Projects and Tasks ****/

// Creates some dummy projects and tasks to populate the webpage
export function createDummyProjectsAndTasks() {
    // localStorage.clear();
    
    const project1 = project('Work');
    const project2 = project('Chores');

    const task1 = task('Respond to Emails', 'There is a backlog of emails to answer', '2024-04-10', 'High');
    const task2 = task('Train New Employee', 'New employee needs to be trained on our platform', 
                        '2024-04-21', 'Medium');
    const task3 = task('Do Laundry', 'Laundry basket is almost full', '2024-04-14', 'Medium');
    const task4 = task('Wash Dishes', 'Dishes are dirty', '2024-04-13', 'High');
    const task5 = task('Change Lightbulb', 'Lightbulb has been flickering for a few days', '2024-04-18', 'Low');

    project1.addTask(task1);
    project1.addTask(task2);
    project2.addTask(task3);
    project2.addTask(task4);
    project2.addTask(task5);

    addProject(project1);
    addProject(project2);

}

createDummyProjectsAndTasks();