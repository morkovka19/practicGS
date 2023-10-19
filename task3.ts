enum Status{
    ready = "ready",
    inProgres = "in progress",
    appointed = "appointed"
}

type Task = {
    name: string,
    descriptin: string,
    status: Status,
    date: Date
}

//? 
type TaskList = {
    tasks: Task[],
    addTask: (task: Task) => void,
    removeTask: (task: Task) => void,
    installTask: (task: Task, newInfo: string | Status | Date) => void
}
