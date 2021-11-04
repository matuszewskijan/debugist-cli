#! /usr/bin/env node

const { exec } = require("child_process");

const [,, ...args] = process.argv

const keyFileStorage = require("key-file-storage")
const kfs = keyFileStorage.default(`${__dirname}/db`, true)

const taskName = kfs.task && kfs.task.name

if (!taskName) {
  console.log("No task!")
  return
}

console.log(`You're checking task ${taskName}`)

exec('docker-compose run test', {
  cwd: `./${taskName}`
}, (error, stdout, stderr) => {
  if (error) {
    colorizedOutput()
    return;
  }

  console.log(stdout)
});

const colorizedOutput = () => {
  exec('docker-compose logs test', {
    cwd: `./${taskName}`
  }, (error, stdout, stderr) => {
    console.log(stdout)
  })
}
