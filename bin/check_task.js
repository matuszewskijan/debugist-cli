#! /usr/bin/env node

const { exec, spawn } = require("child_process");

const [,, ...args] = process.argv

const keyFileStorage = require("key-file-storage")
const kfs = keyFileStorage.default(`${__dirname}/db`, true)

const taskName = kfs.task && kfs.task.name

if (!taskName) {
  console.log("No task!")
  return
}

console.log(`You're checking task ${taskName}`)

const shell = spawn('docker-compose', ['run', 'test'], { stdio: 'inherit', cwd: `./${taskName}` });

shell.on('close',(code)=>{console.log('[shell] closed :', code)})
shell.on('error',(code)=>{console.log('[shell] errored :', code)})
shell.on('message', (msg) => {
  console.log('Message from child', msg);
});
