function project(title) {
    const taskList = [];

    const addTask = (task) => taskList.push(task);
    const deleteTask = (index) => taskList.splice(index, 1);
    const getTask = (index) => taskList[index];
    const getTaskList = () => taskList;

    return {title, addTask, deleteTask, getTask, getTaskList};
}

export {project};
