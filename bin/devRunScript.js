#! /usr/bin/env node
const shell = require('shelljs');

shell.exec('NODE_ENV=development nodemon build/index.js');
