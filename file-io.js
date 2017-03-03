#!/usr/bin/env node

const {readFileSync} = require('fs')

const myJSON = readFileSync('file-io.json', {encoding: 'utf8'})
process.stdout.write(myJSON)
