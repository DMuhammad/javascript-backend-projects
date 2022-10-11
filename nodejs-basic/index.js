const message = (name) => {
    console.log(`Hello ${name}`);
}

message('JavaScript');

console.log(process.memoryUsage().heapUsed);