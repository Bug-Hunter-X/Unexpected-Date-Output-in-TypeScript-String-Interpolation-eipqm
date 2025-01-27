function greet(person: string, date: Date): string {
  console.log(person, date);  //Prints the person and the date
  return `Hello, ${person}! Today is ${date.toDateString()}`;
}

let message = greet("Bob", new Date());
console.log(message);