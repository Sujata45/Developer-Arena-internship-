function generateID(){

    return Date.now();
}

function getTaskStats(tasks){

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const active = total - completed;

    return {
        total,
        completed,
        active
    };
}