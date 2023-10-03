import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.karaoke("Welcome to Typescript OOP Made By Shan");
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let bffr = await inquirer.prompt([{
        message: "-------- Baithak Fast Food Restaurant --------",
        name: "restaurant",
    },
    {
        message: "Customer Name:",
        name: "customer",
    },
    {
        message: "Welcome to Baithak Restaurant. \n What do you like to Eat? \n Here's our Food Menu List: " + "\n \n Food Menu List - Starter: ",
        name: "Starter",
        type: "list",
        choices: ["SKIP", "1. Plain Fries", "2. Mayo Garlic Fries", "3. Cheese Fries", "4. Fish & Chips (6 Pcs)", "5. Chicken Nuggets (10 Pcs)", "6. Crispy Wings (6 Pcs)", "7. Sweet & Sour Soup", "8. Thai Soup"],
    },
    {
        message: "Food Menu List - Broast: ",
        name: "Broast",
        type: "list",
        choices: ["SKIP", "1. Plain Broast", "2. Crispy Broast", "3. Mayo Garlic Broast", "4. Chatpata Broast", "5. Cheese Broast"],
    },
    {
        message: "Food Menu List - Burger: ",
        name: "Burger",
        type: "list",
        choices: ["SKIP", "1. Zinger Burger", "2. Zinger Cheese Burger", "3. Jumbo Zinger Burger", "4. Chicken Burger", "5. Beef Chees Burger"],
    },
    {
        message: "Food Menu List - Sandwich: ",
        name: "Sandwich",
        type: "list",
        choices: ["SKIP", "1. Club Sandwich", "2. Chicken Sandwich", "3. BBQ Sandwich", "4. Malai Boti Sandwich", "5. Vegetables Sandwich"],
    },
    {
        message: "Food Menu List - Drinks: ",
        name: "Drinks",
        type: "list",
        choices: ["SKIP", "1. Limca", "2. Fresh Juice", "3. Coco Cola", "4. Mountain Dew", "5. Mirinda"],
    },
]);
if (bffr.Starter === "SKIP") {
    console.log(chalk.bold.bgBlue("You have not Select from Starter"));
}
else {
    console.log(chalk.bold.bgGreen("Your Order has been Selected from Starter"));
}
if (bffr.Broast === "SKIP") {
    console.log(chalk.bold.bgBlue("You have not Select from Broast"));
}
else {
    console.log(chalk.bold.bgGreen("Your Order has been Selected from Broast"));
}
if (bffr.Burger === "SKIP") {
    console.log(chalk.bold.bgBlue("You have not Select from Burger"));
}
else {
    console.log(chalk.bold.bgGreen("Your Order has been Selected from Burger"));
}
if (bffr.Sandwich === "SKIP") {
    console.log(chalk.bold.bgBlue("You have not Select from Sandwich"));
}
else {
    console.log(chalk.bold.bgGreen("Your Order has been Selected from Sandwich"));
}
if (bffr.Drinks === "SKIP") {
    console.log(chalk.bold.bgBlue("You have not Select from Drinks"));
}
else {
    console.log(chalk.bold.bgGreen("Your Order has been Selected from Drinks"));
}
