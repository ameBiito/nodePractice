import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyeHandler(name){
    console.log("Goodbye " + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);  //on the event greet, i want the greetHandler(they're just events )
myEmitter.on('goodbye', goodbyeHandler);

// Emit events 
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error handling 
myEmitter.on('error', (err) => {
    console.log('An error occured: ', err);
});

//Simulate error
myEmitter.emit('error', new Error("Abuhgaga"));