import Amplify, {API, graphqlOperation }  from "aws-amplify";

import awsconfig from "./aws-exports";
import { createTodo } from "./graphql/mutations";
import { listTodos } from './graphql/queries';

Amplify.configure(awsconfig);

async function createNewTodo() {
    const todo = {
        name: 'Use AppSync',
        description: `Realtime and Offline (${new Date().toLocaleString()})`,
    };

    return await API.graphql(graphqlOperation(createTodo, {input: todo}));
}

async function getData() {
    console.log('Getting list of Todo');
    const result = await API.graphql(graphqlOperation(listTodos));
    if (!!result) {
        console.log(result);
        result.data.listTodos.items.forEach((todo, i) => {
            QueryResult.innerHTML += `<p>${todo.name} - ${todo.description}</p>`
        });
        return;
    }
    alert('Failed: listTodo')
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");
const QueryResult = document.getElementById("QueryResult");

MutationButton.addEventListener("click", async (evt) => {
    const result = await createNewTodo();
    if (!!result) {
        console.log(result);
        MutationResult.innerHTML += `<p>${result.data.createTodo.name} - ${result.data.createTodo.description}</p>`;
        return;
    }
    alert('Failed: createTodo');
});

getData();