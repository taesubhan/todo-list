import {task, taskFromJSON} from './task.js';
import {project, projectFromJSON} from './projects.js';
import {format} from 'date-fns';

/* Projects */ //remove export
export function reviver(key, value) {
    if (value.isProjectObj) {
        return projectFromJSON(value);
    } else if (value.isTaskObj) {
        return taskFromJSON(value);
    } else {
        return value;
    }
}

export function getProjectList() {
    if (localStorage.getItem('projectList')) {
        return JSON.parse(localStorage.getItem('projectList'), reviver);
    } else {
        return [];
    }
}

export function getProjectNames() {
    const projectList = getProjectList();
    return projectList.map((project) => project.title);
}

function setProjectList(projList) {
    localStorage.setItem('projectList', JSON.stringify(projList));
}

export function createProject(title) {
    return project(title);
}

export function addProject(newProject) {
    const projects = getProjectList();
    if (projects.map((proj) => proj.title).includes(newProject.title)) {
        return;
    }
    projects.push(newProject);
    setProjectList(projects);
}

export function getProject(index) {
    return getProjectList()[index];
}

function deleteProject(index) {
    const projects = getProjectList();
    if (index < projects.length) {
        projects.splice(index, 1);
        setProjectList(projects);
    }
}

/* Tasks */

export function createTask(title, description, dueDate, priority) {
    return task(title, description, dueDate, priority);
}

// export function addTaskToProject(existingProject, newTask) {
//     const projects = getProjectList();
//     const project = projects.find((proj) => proj === existingProject);
//     project.addTask(newTask);
//     setProjectList(projects);
// }

export function addTaskToProject(projIndex, taskObj) {
    const projects = getProjectList();
    projects[projIndex].addTask(taskObj);
    setProjectList(projects);
}

export function getTaskStatus(taskObj) {
    return taskObj.taskCompleted ? 'Completed' : 'Incomplete';
}

export function getTaskFromIndex(projIndex, taskIndex) {
    return getProjectList()[projIndex].getTaskList()[taskIndex];
}

export function updateTaskFromIndex(projIndex, taskIndex, taskObj) {
    const projectList = getProjectList();
    projectList[projIndex].setTask(taskIndex, taskObj);
    setProjectList(projectList);
}

export function deleteTaskFromIndex(projIndex, taskIndex) {
    const project = getProject(projIndex);
    project.deleteTask(taskIndex);
    updateSelectedProject(project);
}

/* Selected Projects */

export function getSelectedMenuCategory() {
    return localStorage.getItem('selectedMenuCategory');
}

export function setSelectedMenuCategory(menuCategory) {
    localStorage.setItem('selectedMenuCategory', menuCategory);
}

export function getSelectedProjectIndex() {
    return parseInt(localStorage.getItem('selectedProjectIndex'));
}

export function getSelectedProject() {
    return getProject(getSelectedProjectIndex());
}

export function setNewSelectedProject(projectIndex) {
    setSelectedMenuCategory('projects');
    localStorage.setItem('selectedProjectIndex', projectIndex);
}

export function updateSelectedProject(projectObj) {
    const index = parseInt(localStorage.getItem('selectedProjectIndex'));
    const projectList = getProjectList();
    projectList[index] = projectObj;
    setProjectList(projectList);
}

export function deleteSelectedProject() {
    const currentProjectIndex = parseInt(localStorage.getItem('selectedProjectIndex'));
    deleteProject(currentProjectIndex);
}

export function editSelectedProjectName(newName) {
    const selectedProject = getSelectedProject();
    selectedProject.title = newName;
    updateSelectedProject(selectedProject);
}

export function getTaskFromSelectedProject(index) {
    return getSelectedProject().getTask(index);
}

export function updateTaskFromSelectedProject(taskIndex, taskObj) {
    const selectedProj = getSelectedProject();
    selectedProj.setTask(taskIndex, taskObj);
    updateSelectedProject(selectedProj);
}

export function addTaskToSelectedProject(taskObj) {
    const selectedProj = getSelectedProject();
    selectedProj.addTask(taskObj);
    updateSelectedProject(selectedProj);
}

export function deleteTaskFromSelectedProject(index) {
    const selectedProj = getSelectedProject();
    selectedProj.deleteTask(index);
    updateSelectedProject(selectedProj);
}

/* Date */

function getToday() {
    const dateFormat = 'yyyy-MM-dd';
    const date = new Date();
    return format(date, dateFormat);
}

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

export function getProjectIndex(item) {
    return item['projectIndex'];
}

export function getTaskIndex(item) {
    return item['taskIndex'];
}



/* Dummy Projects and Tasks */

export function createDummyProjectsAndTasks() {
    const project1 = project('Work');
    const project2 = project('Chores');

    const task1 = task('Polish Excel', 'Excel is messy, need to clean it up', '2023-02-03', 'High');
    const task2 = task('Train New Employee', 'New employee needs to be trained on programming', 
                        '2023-05-19', 'Medium');
    const task3 = task('Do Laundry', 'Laundry basket is almost full', '2023-12-14', 'Medium');
    const task4 = task('Wash Dishes', 'Dishes are dirty', '2023-10-07', 'High');
    const task5 = task('Change Lightbulb', 'Lightbulb has been flickering for a few days', '2023-11-13', 'Low');

    project1.addTask(task1);
    project1.addTask(task2);
    project2.addTask(task3);
    project2.addTask(task4);
    project2.addTask(task5);

    addProject(project1);
    addProject(project2);

}

createDummyProjectsAndTasks();