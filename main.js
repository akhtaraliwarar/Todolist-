import inquirer from "inquirer";
/// inquirer
// array
// function
// opreator 
const todos = ['alone', "king"];
async function createtodos(todos) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select opreater",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "add item in list",
            });
            todos.push(addtodo.todo);
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
        }
        if (ans.select == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                name: " todo",
                message: " update  list item again",
                choices: todos.map(item => item),
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "add item in the list",
            });
            let newtodo = todos.filter(val => val !== updatetodo.todo);
            todos = [...newtodo, addtodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("##### todo list ########");
            console.log(todos);
            console.log("*******************");
        }
        if (ans.select == "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                name: " todo",
                message: " remove list item",
                choices: todos.map(items => items)
            });
            let newtodo = todos.filter(val => val !== deletetodo.todo);
            todos = [...newtodo];
            console.log(todos);
        }
    } while (true);
}
createtodos(todos);
/////////////////////////////
