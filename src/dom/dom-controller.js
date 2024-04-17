import * as todo from '../logic/todo-state.js';
import {addDialogButtonActions} from './dialog-box.js';
import {displayAll} from './display-on-screen.js';
import checkListIcon from '../images/icons/format-list-checks.svg';

// Adds icon to webpage tab
function insertTabIcon() {
    const head = document.querySelector('head');
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('href', checkListIcon);
    head.appendChild(link);
}

// Runs all the scripts to display and activate the todo webpage
function start() {
    insertTabIcon();
    todo.setSelectedMenuCategory('tasksByDate');
    displayAll();
    addDialogButtonActions();
}

export {start};