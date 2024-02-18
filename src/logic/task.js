function task(title, description, dueDate, priority) {
    let taskCompleted = false;
    // const editTitle = (newTitle) => title = newTitle;
    // const editDescription = (newDescription) => description = newDescription;
    // const editDueDate = (newDueDate) => dueDate = newDueDate;
    // const editPriority = (newPriority) => priority = newPriority;
    const toggleCompleted = () => {
        todoCompleted 
            ? todoCompleted = false 
            : todoCompleted = true
    }
    const isTaskCompleted = () => taskCompleted;
    
    return {title, description, dueDate, priority, 
            toggleCompleted, isTaskCompleted};
}

export {task};

