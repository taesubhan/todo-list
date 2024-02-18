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

export function deleteTaskFromSelectedProject(index) {
    selectedProject.deleteTask(index);
}

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