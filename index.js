const chalk = require('chalk' ); //commonjs
const axios = require('axios');

const BORED_API = 'https://boredapi.com/api/activity/';

console.log("I am bored!");

const message = chalk.blue('Me too!!!');

console.log(message);

axios.get(BORED_API)
    .then(printActivity)
    .catch(handleError);


function printActivity(response) {
    const {
        activity, 
        type, 
        accessibility, 
        participants, 
        price
    } = response.data;
    const message = `we could ${activity} which only costs $${price}.
     Additionally, this ${type} activity only requires ${participants} ${participants === 1 ? 'person' : 'people'} 
     and ${accessibility * 100.0}% effort.`;
     console.log(chalk.green.bold(message));
}
function handleError(error) {
    const message = `Encountered Error: ${error}`;
    console.log(chalk.red.bold(message));
}