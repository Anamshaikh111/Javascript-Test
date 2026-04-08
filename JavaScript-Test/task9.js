function delayTask(taskName) {
    const delay = Math.random() * (2000 - 500) + 500;

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Task ${name} completed`);
            resolve();
        }, delay);
    });
}
async function runTasks() {
    await delayTask("A");
    await delayTask("B");
    await delayTask("C");

    console.log("All tasks completed");
}

runTasks();