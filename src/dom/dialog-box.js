import * as todo from '../logic/todo-state.js';
import {updateDisplay} from './display-on-screen.js';


function addTaskDetailDialogButtons() {
    const dialogBox = document.querySelector('#display-task-detail');
    const cancelButton = document.querySelector('.cancel-task-detail');
    const deleteButton = document.querySelector('.delete-task');

    deleteButton.addEventListener('click', (e) => {
        const index = parseInt(e.target.parentNode.parentNode.getAttribute('task-index'));
        todo.deleteTaskFromSelectedProject(index);
        dialogBox.close();
        updateDisplay();
    }) 

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
}

export function editAndOpenTaskDetailDialog(taskIndex) {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');
    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const editButton = document.querySelector('.edit-task-detail');
    const cancelButton = document.querySelector('.cancel-task-detail');
    const deleteButton = document.querySelector('.delete-task');

    taskForm.setAttribute('task-index', `${taskIndex}`);

    const taskObj = todo.getTaskFromSelectedProject(taskIndex);
    
    title.textContent = taskObj.title;
    description.textContent = taskObj.description;
    dueDate.textContent = taskObj.dueDate;
    priority.textContent = taskObj.priority;

    // deleteButton.addEventListener('click', () => {
    //     todo.deleteTaskFromSelectedProject(taskIndex);
    //     dialogBox.close();
    //     updateDisplay();
    // })

    dialogBox.showModal();
}

function addCreatingTaskDialog() {
    const dialogBox = document.querySelector('#add-task-dialog');
    const taskForm = document.querySelector('.add-task-form');
    const showDialogButton = document.querySelector('.task-show-dialog');
    const confirmButton = document.querySelector('.task-confirm');
    const cancelButton = document.querySelector('.task-cancel');

    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');

    showDialogButton.addEventListener('click', () => dialogBox.showModal());

    dialogBox.addEventListener('close', () => taskForm.reset());

    confirmButton.addEventListener('click', (e) => {
        if (taskForm.reportValidity()) {   
            e.preventDefault();
            dialogBox.close();

            const newTask = todo.createTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
            todo.addTaskToProject(todo.getSelectedProject(), newTask);
            updateDisplay();
        }
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    });
}

function addCreatingProjectDialog() {
    const dialogBox = document.querySelector('#add-project-dialog');
    const projectForm = document.querySelector('.add-project-form');
    const showDialogButton = document.querySelector('.project-show-dialog');
    const confirmButton = document.querySelector('.project-confirm');
    const cancelButton = document.querySelector('.project-cancel');
    const projectInput = document.querySelector('#project-title-input');

    showDialogButton.addEventListener('click', () => dialogBox.showModal());

    dialogBox.addEventListener('close', () => projectForm.reset());

    confirmButton.addEventListener('click', (e) => {
        if (projectForm.reportValidity()) {
            e.preventDefault();
            dialogBox.close();

            const newProject = todo.createProject(projectInput.value);
            todo.addProject(newProject);
            console.log(newProject);
            updateDisplay();
        }
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
}

function addDialogButtonActions() {
    addCreatingTaskDialog();
    addCreatingProjectDialog();
    addTaskDetailDialogButtons();
}


export {addDialogButtonActions};