import {addDialogButtonActions} from './dialog-box.js';
import {displayTaskList, displayProjectsOnMenu} from './display-on-screen.js';

function start() {
    displayTaskList();
    displayProjectsOnMenu();
    addDialogButtonActions();
}

export {start};