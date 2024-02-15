import {task} from './task.js';
import {project} from './projects.js';


const projectList = [];
let selectedProject = null;

export function createTask(title, description, dueDate, priority) {
    return task(title, description, dueDate, priority);
}

export function addTaskToProject(existingProject, newTask) {
    existingProject.addTask(newTask);
}

export function deleteTaskFromSelectedProject(index) {
    selectedProject.deleteTask(index);
}

export function createProject(title) {
    return project(title);
}

export function addProject(newProject) {
    projectList.push(newProject);
}

export function getProject(index) {
    return projectList[index];
}

export function getProjectList() {
    return projectList;
}

export function getSelectedProject() {
    return selectedProject;
}

export function setSelectedProject(project) {
    selectedProject = project;
    // selectedProject = getProject(index);
}

export function getTaskFromSelectedProject(index) {
    return selectedProject.getTask(index);
}

export function createDummyProjectsAndTasks() {
    const project1 = project('Work');
    const project2 = project('Chores');

    const task1 = task('Polish Excel', 'Excel is messy, need to clean it up', '12/02/23', 'High');
    const task2 = task('Train New Employee', 'New employee needs to be trained on programming', 
                        '12/05/23', 'Medium');
    const task3 = task('Do Laundry', 'Laundry basket is almost full', '12/04/23', 'Medium');
    const task4 = task('Wash Dishes', 'Dishes are dirty', '12/04/23', 'High');
    const task5 = task('Change Lightbulb', 'Lightbulb has been flickering for a few days', '12/17/23', 'Low');

    project1.addTask(task1);
    project1.addTask(task2);
    project2.addTask(task3);
    project2.addTask(task4);
    project2.addTask(task5);

    addProject(project1);
    addProject(project2);
}

createDummyProjectsAndTasks();