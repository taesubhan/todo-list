import {task, taskFromJSON} from './task.js';
import {project, projectFromJSON} from './projects.js';

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

function setProjectList(projList) {
    localStorage.setItem('projectList', JSON.stringify(projList));
}

export function createProject(title) {
    return project(title);
}

export function addProject(newProject) {
    const projects = getProjectList();
    if (projects.map((proj) => proj.title).includes(newProject.title)) {
        console.log('Prevent Addition Of Project');
        return;
    }
    projects.push(newProject);
    setProjectList(projects);
}

export function getProject(index) {
    return getProjectList()[index];
}

/* Tasks */

export function createTask(title, description, dueDate, priority) {
    return task(title, description, dueDate, priority);
}

export function addTaskToProject(existingProject, newTask) {
    const projects = getProjectList();
    const project = projects.find((proj) => proj === existingProject);
    project.addTask(newTask);
    setProjectList(projects);
}

export function getTaskStatus(taskObj) {
    return taskObj.taskCompleted ? 'Completed' : 'Incomplete';
}

/* Selected Projects */

export function getSelectedProject() {
    return getProject(parseInt(localStorage.getItem('selectedProjectIndex')));
}

export function setNewSelectedProject(projectIndex) {
    localStorage.setItem('selectedProjectIndex', projectIndex);
}

export function updateSelectedProject(projectObj) {
    const index = parseInt(localStorage.getItem('selectedProjectIndex'));
    const projectList = getProjectList();
    projectList[index] = projectObj;
    setProjectList(projectList);
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