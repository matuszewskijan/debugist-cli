#! /usr/bin/env node

const { exec } = require("child_process");
const keyFileStorage = require("key-file-storage")
let kfs = keyFileStorage.default(`${__dirname}/db`, true) // TODO: Move it outside of bin folder


const [,, ...args] = process.argv

const name = args[0]
kfs.task = { name: name }

console.log(`You choose task ${args}`)
