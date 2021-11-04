#! /usr/bin/env node

const [,, ...args] = process.argv

const keyFileStorage = require("key-file-storage")
let kfs = keyFileStorage.default(`${__dirname}/db`, true)

console.log(`You're running task ${kfs.task.name}`)
