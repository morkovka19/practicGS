enum Status{
    ready = "ready",
    inProgress = "in progress",
    appointed = "appointed"
}

interface IDate {
    day: number,
    month: number,
    year: number
}

type Task = {
    name: string,
    description: string,
    status: Status,
    date: IDate
}

class TaskList {
    private tasks: Task[] = [];

    public addTask(task: Task): void {
      this.tasks.push(task);
    }

    public removeTask(index: number): void {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
      }
    }

    public updateTask(index: number, task: Task): void {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index] = task;
      }
    }

    public printTasks(): void {
      this.tasks.forEach((task, index) => {
        console.log(`Task ${index + 1}:`);
        console.log(`Title: ${task.name}`);
        console.log(`Description: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log(
          `Created Date: ${task.date.day}/${task.date.month}/${task.date.year}`
        );
        console.log('');
      });
    }
  }

  const task1: Task = {
    name: '11',
    description: ' 11',
    status: Status.inProgress,
    date: { day: 1, month: 1, year: 1 },
  };

  const task2: Task = {
    name: '222',
    description: '222',
    status: Status.inProgress,
    date: { day: 2, month: 2, year: 2 },
  };

  const task3: Task = {
    name: '333',
    description: '333',
    status: Status.appointed,
    date: { day: 3, month: 3, year: 3 },
  };

  const taskList = new TaskList();
  taskList.addTask(task1);
  taskList.addTask(task2);
  taskList.addTask(task3);
  console.log("Add task: \n")
  taskList.printTasks();
  taskList.removeTask(2);
  console.log("\n\nRemove task: \n")
  taskList.printTasks();

  const task4: Task = {
    name: '444',
    description: '333',
    status: Status.ready,
    date: {day: 4, month: 4, year: 4}
  }

  taskList.updateTask(1, task4);
  console.log("\n\nUpdate task: \n")
  taskList.printTasks();
