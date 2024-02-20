import * as todo from '../logic/todo-state.js';
import {updateDisplay} from './display-on-screen.js';

function makeTextElementsEditable(flag=true, ...elements) {
    elements.forEach((elem) => elem.setAttribute('contentEditable', flag ? 'true' : 'false'));
}

function makeDateEditable(flag=true, dueDate, dueDateInput, taskIndex) {
    dueDate.style.display = flag ? 'none' : '';
    dueDateInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromSelectedProject(taskIndex);
    
    if (flag) {
        dueDateInput.value = taskObj.dueDate;
    } else {
        dueDate.textContent = taskObj.dueDate;
    }
}

function makePriorityEditable(flag=true, priority, priorityInput, taskIndex) {
    priority.style.display = flag ? 'none' : '';
    priorityInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromSelectedProject(taskIndex);

    if (flag) {
        priorityInput.value = taskObj.priority;
    } else {
        priority.textContent = taskObj.priority;
    }
}

function makeStatusEditable(flag=true, status, statusInput, taskIndex) {
    status.style.display = flag ? 'none' : '';
    statusInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromSelectedProject(taskIndex);

    if (flag) {
        statusInput.textContent = taskObj.getTaskStatus();
    } else {
        status.textContent = taskObj.getTaskStatus();
    }
}

function hideElements(...elements) {
    elements.forEach((elem) => elem.style.display = 'none');
}

function showElements(...elements) {
    elements.forEach((elem) => elem.style.display = '');
}

function revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, taskIndex) {
    const currentTask = todo.getTaskFromSelectedProject(taskIndex);

    title.textContent = currentTask.title;
    description.textContent = currentTask.description;
    dueDateInput.value = currentTask.dueDate;
    priorityInput.value = currentTask.priority;
    statusInput.textContent = currentTask.getTaskStatus();
}

function getTaskIndex(formElement) {
    return parseInt(formElement.getAttribute('task-index'));
}

function addTaskDetailDialogButtons() {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');

    const cancelButton = document.querySelector('.cancel-task-detail');
    const deleteButton = document.querySelector('.delete-task');
    const editButton = document.querySelector('.edit-task-detail');
    const confirmEditButton = document.querySelector('.confirm-edit');
    const cancelEditButton = document.querySelector('.cancel-edit'); 

    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const status = document.querySelector('.task-detail-status-value');

    //hidden input that gets displayed when user decides to edit values
    const dueDateInput = document.querySelector('.task-detail-due-date-input');
    const priorityInput = document.querySelector('.task-detail-priority-input');
    const statusInput = document.querySelector('.task-detail-status-input');
    

    deleteButton.addEventListener('click', (e) => {
        const taskIndex = getTaskIndex(taskForm);
        todo.deleteTaskFromSelectedProject(taskIndex);
        dialogBox.close();
        updateDisplay();
    }) 

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })

    editButton.addEventListener('click', (e) => {
        const taskIndex = getTaskIndex(taskForm);
        
        makeTextElementsEditable(true, title, description);
        makeDateEditable(true, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(true, priority, priorityInput, taskIndex);
        makeStatusEditable(true, status, statusInput, taskIndex);
        
        hideElements(editButton, cancelButton, deleteButton);
        showElements(confirmEditButton, cancelEditButton); 
    })

    cancelEditButton.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);

        revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, taskIndex);
        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);
        makeStatusEditable(false, status, statusInput, taskIndex);

        hideElements(confirmEditButton, cancelEditButton);
        showElements(editButton, cancelButton, deleteButton)
    })

    confirmEditButton.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);
        const task = todo.getTaskFromSelectedProject(taskIndex);

        task.title = title.textContent;
        task.description = description.textContent;
        task.dueDate = dueDateInput.value;
        task.priority = priorityInput.value;
        task.setTaskStatus(statusInput.value === 'true' ? true : false);

        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);
        makeStatusEditable(false, status, statusInput, taskIndex);

        hideElements(confirmEditButton, cancelEditButton);
        showElements(editButton, cancelButton, deleteButton);

        updateDisplay();
    })

    statusInput.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);
        const task = todo.getTaskFromSelectedProject(taskIndex);
//FIX THIS!

        // const val = !statusInput.value;
        // statusInput.value = false; 
        statusInput.value = statusInput.value === 'true' ? 'false' : 'true';
        statusInput.textContent = statusInput.value === 'true' ? 'Completed' : 'Incomplete';

    })
}

export function editAndOpenTaskDetailDialog(taskIndex) {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');
    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const status = document.querySelector('.task-detail-status-value');
    const statusInput = document.querySelector('.task-detail-status-input');

    taskForm.setAttribute('task-index', `${taskIndex}`);

    const taskObj = todo.getTaskFromSelectedProject(taskIndex);
    
    title.textContent = taskObj.title;
    description.textContent = taskObj.description;
    dueDate.textContent = taskObj.dueDate;
    priority.textContent = taskObj.priority;
    status.textContent = taskObj.getTaskStatus();
    statusInput.value = `${taskObj.isTaskCompleted()}`;

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