type GroupedObjects<T> = { [key: string]: T[] };

function groupBy<T extends Record <string, unknown>>(arr: T[], key: keyof T): GroupedObjects<T> {
  return arr.reduce((acc: GroupedObjects<T>, cur: T) => {
    const groupKey = String(cur[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(cur);
    return acc;
  }, {});
}


const objects = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 },
  { id: 4, name: 'David', age: 30 },
];

const groupedByAge = groupBy(objects, 'age');
console.log(groupedByAge);
