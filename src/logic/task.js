function task(title, description, dueDate, priority) {
    let taskCompleted = false;
    // const editTitle = (newTitle) => title = newTitle;
    // const editDescription = (newDescription) => description = newDescription;
    // const editDueDate = (newDueDate) => dueDate = newDueDate;
    // const editPriority = (newPriority) => priority = newPriority;
    const toggleCompleted = () => {
        taskCompleted
            ? taskCompleted = false 
            : taskCompleted = true
    }
    const isTaskCompleted = () => taskCompleted;
    const setTaskStatus = (status) => taskCompleted = status;
    const getTaskStatus = () => taskCompleted ? 'Completed' : 'Incomplete';
    
    return {title, description, dueDate, priority, toggleCompleted, isTaskCompleted, setTaskStatus, getTaskStatus};
}

export {task};

