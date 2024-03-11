function project(title) {
    const taskList = [];
    const addTask = (task) => taskList.push(task);
    const deleteTask = (index) => taskList.splice(index, 1);
    const getTask = (index) => taskList[index];
    const getTaskList = () => taskList;
    const setTask = (index, taskObj) => taskList[index] = taskObj; ///HERE
    const toJSON = () => {
        return {isProjectObj:true, title, taskList};
    }

    return {isProjectObj:true, title, addTask, deleteTask, getTask, getTaskList, setTask, toJSON};
}

function projectFromJSON(state) {
    const {title, taskList} = state || {taskList: []};
    const result = project(title);
    taskList.forEach((item) => result.addTask(item)) ;
    return result;
}

export {project, projectFromJSON};
