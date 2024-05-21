

// argv -> Is an array that can be modified with the command line adding flags when executing this file 
console.log(process.argv);
console.log(process.argv[3]); //sine it's an array, we can acces any of its entries like this(flags will be appended to it)

//process.env -> Shows all information regarding the system
console.log(process.env);

// pid -> showsa process id 

console.log(process.pid);

// cwd() -> current work directory

console.log(process.cwd());

//title  -> process name 
console.log(process.title);

// memoryUsage() -> Gets memory usage of the syetem 
console.log(process.memoryUsage());


// uptime()  -> Process uptime
console.log(process.uptime());

// on() -> Listen to events 
process.on('exit', (code) => {
    console.log(`About to exit with code ${code}`);
});

// exit() -> exits the process and you can pass code where 0 is success, 1 is an error
process.exit(0);


