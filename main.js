import inquirer from "inquirer";
// let todos: string[] = [];
// let condition = true;
// while (condition) {
//   let ans = await inquirer.prompt([
//     {
//       name: "select",
//       type: "list",
//       message: "Select an operation",
//       choices: ["Add", "update", "view", "delete", "exit"],
//     },
//   ]);
//   if (ans.select === "Add") {
//     let addTodo = await inquirer.prompt({
//       name: "todo",
//       type: "input",
//       message: "Add items in the list",
//       validate: function (input) {
//         if (input.trim() == "") {
//           return "Please enter a non-empty item.";
//         }
//         return true;
//       },
//     });
//     if (addTodo.todo.trim() !== "") {
//       todos.push(addTodo.todo);
//       todos.forEach((todo) => console.log(todo));
//     }
//   }
//   if (ans.select === "update") {
//     let updateTodo = await inquirer.prompt({
//       name: "todo",
//       type: "list",
//       message: "Update items in the list",
//       choices: todos.map((item) => item),
//     });
//     let addTodo = await inquirer.prompt({
//       name: "todo",
//       type: "input",
//       message: "Add items in the list",
//     });
//     let newTodo = todos.filter((val) => val !== updateTodo.todo);
//     todos = [...newTodo, addTodo.todo];
//     todos.forEach((todo) => console.log(todo));
//   }
//   if (ans.select === "view") {
//     console.log("***** TO-DO LIST *****");
//     todos.forEach((todo) => console.log(todo));
//   }
//   if (ans.select === "delete") {
//     let deleteTodo = await inquirer.prompt({
//       name: "todo",
//       type: "list",
//       message: "Select item to delete",
//       choices: todos.map((item) => item),
//     });
//     let newTodo = todos.filter((val) => val !== deleteTodo.todo);
//     todos = [...newTodo];
//     todos.forEach((todo) => console.log(todo));
//   }
//   if (ans.select === "exit") {
//     console.log("Exiting program...");
//     condition = false;
//   }
// }
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which method of Inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(` you Score: ${score}`);
