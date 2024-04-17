/**** Task Object ****/

// Factory function that creates a task object that represents a single task in the todo webpage
function task(title, description, dueDate, priority) {
    let taskCompleted = false;

    const isTaskCompleted = () => taskCompleted;
    const setTaskStatus = (status) => taskCompleted = status;
    const getTaskStatus = () => taskCompleted ? 'Completed' : 'Incomplete';

    return {isTaskObj:true, title, description, dueDate, priority, taskCompleted, isTaskCompleted, setTaskStatus, getTaskStatus};
}

// Create a task object by extracting properties from another object, which is created from JSON.parse()
function taskFromJSON(state) {
    const {title, description, dueDate, priority, taskCompleted} = state || {};
    const result = task(title, description, dueDate, priority);
    result.taskCompleted = taskCompleted;
    return result;
}

export {task, taskFromJSON};

