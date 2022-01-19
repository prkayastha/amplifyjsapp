import Amplify, {API, graphqlOperation }  from "aws-amplify";

import awsconfig from "./aws-exports";
import { createTodo } from "./graphql/mutations";

Amplify.configure(awsconfig);

async function createNewTodo() {
    const todo = {
        name: 'Use AppSync',
        description: `Realtime and Offline (${new Date().toLocaleString()})`,
    };

    return await API.graphql(graphqlOperation(createTodo, {input: todo}));
}

const MutationButton = document.getElementById("MutationEventButton");
const MutationResult = document.getElementById("MutationResult");

MutationButton.addEventListener("click", async (evt) => {
    const result = await createNewTodo();
    if (!!result) {
        console.log(result);
        MutationResult.innerHTML += `<p>${result.data.createTodo.name} - ${result.data.createTodo.description}</p>`;
        return;
    }
    alert('Failed: createTodo');
})