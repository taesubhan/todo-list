import * as todo from '../logic/todo-state.js';
import {updateDisplay} from './display-on-screen.js';
import {formatDate} from './dom-functions.js';
import closeIcon from '../images/icons/close.svg';

/****  ****/

// Makes the text element either editable or non-editable depending on the flag argument
function makeTextElementsEditable(flag=true, ...elements) {
    elements.forEach((elem) => {
        elem.setAttribute('contentEditable', flag ? 'true' : 'false');
        elem.classList.toggle('editable', flag);
    })
}

// Makes the date element either editable or non-editable depending on the flag argument
function makeDateEditable(flag=true, dueDate, dueDateInput, projIndex, taskIndex) {
    dueDate.style.display = flag ? 'none' : '';
    dueDateInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);
    
    if (flag) {
        dueDateInput.value = taskObj.dueDate;
    } else {
        dueDate.textContent = formatDate(taskObj.dueDate);
    }
}

// Makes the priority element either editable or non-editable depending on the flag argument
function makePriorityEditable(flag=true, priority, priorityInput, projIndex, taskIndex) {
    priority.style.display = flag ? 'none' : '';
    priorityInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);

    if (flag) {
        priorityInput.value = taskObj.priority;
    } else {
        priority.textContent = taskObj.priority;
    }
}

// Makes the status element either editable or non-editable depending on the flag argument
function makeStatusEditable(flag=true, status, statusInput, projIndex, taskIndex) {
    status.style.display = flag ? 'none' : '';
    statusInput.style.display = flag ? '' : 'none';

    const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);

    if (flag) {
        statusInput.textContent = todo.getTaskStatus(taskObj);
    } else {
        status.textContent = todo.getTaskStatus(taskObj);
    }
}

// Hide elements so they can't be seen on the webpage
function hideElements(...elements) {
    elements.forEach((elem) => elem.style.display = 'none');
}

// Reveal hidden elements so they can be seen on the webpage
function showElements(...elements) {
    elements.forEach((elem) => elem.style.display = '');
}

// Repopulates the given elements with the values from the local storage. Any values already tied to the elements will therefore be wiped out
function revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, projIndex, taskIndex) {
    const currentTask = todo.getTaskFromIndex(projIndex, taskIndex);

    title.textContent = currentTask.title;
    description.textContent = currentTask.description;
    dueDateInput.value = currentTask.dueDate;
    priorityInput.value = currentTask.priority;
    statusInput.textContent = todo.getTaskStatus(currentTask);
}

// Returns the task index stored from the form element. This index was set by the function editAndOpenTaskDetailDialog()
function getTaskIndex(formElement) {
    return parseInt(formElement.getAttribute('task-index'));
}

// Returns the project index stored from the form element. This index was set by the function editAndOpenTaskDetailDialog()
function getProjectIndex(formElement) {
    return parseInt(formElement.getAttribute('project-index'));
}

// Returns the close (x) icon to exit out of the task detail dialog box
function createExitTaskDetailButton() {
    const closeButtonIcon = new Image();
    closeButtonIcon.src = closeIcon;
    closeButtonIcon.classList.add('close-task-detail-button', 'close-button');
    
    return closeButtonIcon;
}

// Add event listeners to buttons within the task detail dialog
function addTaskDetailDialogButtons() {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');

    const closeButtonContainer = document.querySelector('.close-task-detail');
    const closeButtonIcon = createExitTaskDetailButton();

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
        const projIndex = getProjectIndex(taskForm);
        const taskIndex = getTaskIndex(taskForm);
        todo.deleteTaskFromIndex(projIndex, taskIndex);
        dialogBox.close();
        updateDisplay();
    }) 

    closeButtonIcon.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
    closeButtonContainer.appendChild(closeButtonIcon);

    // Changes all the properties of the task to be editable after the "Edit" button is clicked on
    function makeDialogEditable(editFlag=true, projIndex, taskIndex) {        
        makeTextElementsEditable(editFlag, title, description);
        makeDateEditable(editFlag, dueDate, dueDateInput, projIndex, taskIndex);
        makePriorityEditable(editFlag, priority, priorityInput, projIndex, taskIndex);
        makeStatusEditable(editFlag, status, statusInput, projIndex, taskIndex);
        
        const detailActions = [editButton, closeButtonIcon, deleteButton];
        const editActions = [confirmEditButton, cancelEditButton];

        if (editFlag) {
            hideElements(...detailActions);
            showElements(...editActions); 
        } else {
            hideElements(...editActions);
            showElements(...detailActions); 
        }
    }

    editButton.addEventListener('click', () => {
        const projIndex = getProjectIndex(taskForm);
        const taskIndex = getTaskIndex(taskForm);
        
        makeDialogEditable(true, projIndex, taskIndex);
    })

    cancelEditButton.addEventListener('click', () => {
        const projIndex = getProjectIndex(taskForm);
        const taskIndex = getTaskIndex(taskForm);

        revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, projIndex, taskIndex);
        makeDialogEditable(false, projIndex, taskIndex);
    })

    confirmEditButton.addEventListener('click', (e) => {
        const projIndex = getProjectIndex(taskForm);
        const taskIndex = getTaskIndex(taskForm);
        const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);

        taskObj.title = title.textContent;
        taskObj.description = description.textContent;
        taskObj.dueDate = dueDateInput.value;
        taskObj.priority = priorityInput.value;
        taskObj.taskCompleted = statusInput.value === 'true' ? true : false;
        
        todo.updateTaskFromIndex(projIndex, taskIndex, taskObj);
        makeDialogEditable(false, projIndex, taskIndex);

        updateDisplay();
    })

    // Toggle the status of a task by clicking on this button
    statusInput.addEventListener('click', () => {
        statusInput.value = statusInput.value === 'true' ? 'false' : 'true';
        statusInput.textContent = statusInput.value === 'true' ? 'Completed' : 'Incomplete';
    })
}

// Opens the task detail dialog box 
export function editAndOpenTaskDetailDialog(projIndex, taskIndex) {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');
    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const status = document.querySelector('.task-detail-status-value');
    const statusInput = document.querySelector('.task-detail-status-input');

    taskForm.setAttribute('project-index', `${projIndex}`);
    taskForm.setAttribute('task-index', `${taskIndex}`);

    const taskObj = todo.getTaskFromIndex(projIndex, taskIndex);
    
    title.textContent = taskObj.title;
    description.textContent = taskObj.description;
    dueDate.textContent = formatDate(taskObj.dueDate);
    priority.textContent = taskObj.priority;
    status.textContent = todo.getTaskStatus(taskObj);
    statusInput.value = `${taskObj.taskCompleted}`;
    dialogBox.showModal();
}

// Create a dropdown that allows users to pick from a list of already existing projects. Used to define where a newly added task goes to when they are not selecting a project menu option
function createProjectSelectionLabelAndDropDown() {
    const projectSelectionLabel = document.createElement('label');
    const requiredSign = document.createElement('span');
    const projectSelection = document.createElement('select');
    
    projectSelectionLabel.textContent = 'Project';
    projectSelectionLabel.setAttribute('for', 'project-for-task-input');
    projectSelectionLabel.classList.add('add-task-label', 'exist-only-for-tasks-by-date');
    requiredSign.textContent = '*'
    requiredSign.classList.add('required');
    projectSelectionLabel.appendChild(requiredSign);
    
    projectSelection.setAttribute('id', 'project-for-task-input');
    projectSelection.classList.add('add-task-input-box', 'editable', 'exist-only-for-tasks-by-date');
    projectSelection.required = true;

    const projNames = todo.getProjectNames();

    for (let i = 0; i < projNames.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = projNames[i];
        projectSelection.appendChild(option);
    }

    return [projectSelectionLabel, projectSelection];
}

// Deletes all projects from the project drop down in the "Add Task" dialog box
function removeProjectSelection() {
    const projSelectionObjs = document.querySelectorAll('.exist-only-for-tasks-by-date');
    if (projSelectionObjs) {
        projSelectionObjs.forEach((obj) => obj.remove());
    }
}

// Returns the project array index that is attributed to the project dropdown selection
function retrieveProjectIndex(projectSelection) {
    const menu = todo.getSelectedMenuCategory();
    if (menu === 'tasksByDate') {
        return projectSelection.value;
    } else if (menu === 'projects') {
        return todo.getSelectedProjectIndex();
    }
}

// Creates a dialog box that is used to create a new task object
function addCreatingTaskDialog() {
    const dialogBox = document.querySelector('#add-task-dialog');
    const taskForm = document.querySelector('.add-task-form');
    const showDialogButton = document.querySelector('.task-show-dialog');
    const confirmButton = document.querySelector('.task-confirm');
    const cancelButton = document.querySelector('.task-cancel');
    const inputContainer = document.querySelector('.user-task-inputs');

    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');

    /* Add project input when users are adding tasks from the "Tasks By Date" menu option */
    let projectIndex;
    let projectSelectionLabel;
    let projectSelection;

    showDialogButton.addEventListener('click', () => {
        dialogBox.showModal();
        const menu = todo.getSelectedMenuCategory();
        if (menu === 'projects') {
            // projectIndex = todo.getSelectedProjectIndex();
        } else if (menu === 'tasksByDate') {
            [projectSelectionLabel, projectSelection] = createProjectSelectionLabelAndDropDown();
            inputContainer.appendChild(projectSelectionLabel);
            inputContainer.appendChild(projectSelection);
        }
    })

    dialogBox.addEventListener('close', () => {
        taskForm.reset();
        removeProjectSelection();
    });

    confirmButton.addEventListener('click', (e) => {
        if (taskForm.reportValidity()) {   
            e.preventDefault();
            dialogBox.close();

            projectIndex = retrieveProjectIndex(projectSelection);

            const newTask = todo.createTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
            todo.addTaskToProject(projectIndex, newTask); 

            updateDisplay();
        }
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    });
}

// Creates a dialog box that is used to create a new project object
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
            updateDisplay();
        }
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
}

// Opens dialog box that displays project settings
export function displayProjectSettingsDialog() {
    const projectSettingsDialog = document.querySelector('#project-settings');
    projectSettingsDialog.showModal();
}

// Closes the dialog box that contains project settings
function closeProjectSettingsDialog() {
    const projectSettingsDialog = document.querySelector('#project-settings');
    projectSettingsDialog.close();
}

// Adds the "x" icon used to close the project settings dialog box
function addProjectSettingsCloseButton() {
    const closeButton = new Image();
    closeButton.src = closeIcon;
    closeButton.classList.add('close-project-setting-button', 'close-button');
    closeButton.addEventListener('click', () => {
        document.querySelector('#new-project-name').value = null;
        closeProjectSettingsDialog();
        displayProjectSettingsButtons();
    })

    const projectSettings = document.querySelector('.project-settings-container');
    projectSettings.insertBefore(closeButton, projectSettings.firstChild);
}

// Adds event listener to a button to delete the designated project on click. 
function activateDeleteProjectButton() {
    const deleteButton = document.querySelector('.delete-project');
    deleteButton.addEventListener('click', () => {
        todo.deleteSelectedProject();
        closeProjectSettingsDialog();
        updateDisplay();
    })
}

// Displays the buttons, on the project settings dialog box, that manipulate the project (e.g. edit name, delete)
function displayProjectSettingsButtons() {
    const editProjectBox = document.querySelector('.edit-project-name-inputs');
    editProjectBox.style.display = 'none';
    const projectSettingBox = document.querySelector('.project-settings-actions');
    projectSettingBox.style.display = '';
}

// Displays the input, on the project settings dialog box, that changes the project name 
function displayProjectNameChangeInput() {
    const editProjectBox = document.querySelector('.edit-project-name-inputs');
    editProjectBox.style.display = '';
    const projectSettingBox = document.querySelector('.project-settings-actions');
    projectSettingBox.style.display = 'none';
}

// Changes the project settings dialog box to allow users to edit the project name
function activateEditProjectFeatures() {
    const dialogBox = document.querySelector('#project-settings');
    const input = document.querySelector('#new-project-name');
    const confirm = document.querySelector('.confirm-new-project-name');
    const cancel = document.querySelector('.cancel-new-project-name');

    confirm.addEventListener('click', () => {
        todo.editSelectedProjectName(input.value);
        updateDisplay();
        input.value = null;
        displayProjectSettingsButtons();
        dialogBox.close();
    })

    cancel.addEventListener('click', () => {
        input.value = null;
        displayProjectSettingsButtons();
    })
}

// Adds event listener to button to display the project name change input
function activateEditProjectButton() {
    const editButton = document.querySelector('.edit-project-name');
    editButton.addEventListener('click', () => {
        displayProjectNameChangeInput();
    })
}

// Prepares the project settings dialog box by adding necessary icons, buttons, event listeners, etc.
function addProjectSettings() {
    addProjectSettingsCloseButton();
    activateDeleteProjectButton();
    activateEditProjectButton(); 
    activateEditProjectFeatures();
}

// Creates all the dialog boxes into the DOM
function addDialogButtonActions() {
    addCreatingTaskDialog();
    addCreatingProjectDialog();
    addTaskDetailDialogButtons();
    addProjectSettings();
}

export {addDialogButtonActions};