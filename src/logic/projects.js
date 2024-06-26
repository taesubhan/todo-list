/**** Project Object ****/

function project(title) {
    const taskList = [];
    const addTask = (task) => taskList.push(task);
    const deleteTask = (index) => taskList.splice(index, 1);
    const getTask = (index) => taskList[index];
    const getTaskList = () => taskList;
    const setTask = (index, taskObj) => taskList[index] = taskObj;
    const toJSON = function() { //can't use an arrow function when using 'this' keyword
        return {isProjectObj:true, title: this.title, taskList};
    }

    return {isProjectObj:true, title, addTask, deleteTask, getTask, getTaskList, setTask, toJSON};
}

// Create a project object by extracting properties from another object, which is created from JSON.parse()
function projectFromJSON(state) {
    const {title, taskList} = state || {taskList: []};
    const result = project(title);
    taskList.forEach((item) => result.addTask(item)) ;
    return result;
}

export {project, projectFromJSON};
