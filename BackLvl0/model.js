export default function addTask(tasks, name, description) {
    let newTask = {
        name: name,
        description: description,
    };
    tasks.push(newTask);
}
