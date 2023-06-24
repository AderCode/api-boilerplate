#! /usr/bin/env node
const shell = require('shelljs');

shell.exec(
	"concurrently 'NODE_ENV=development webpack' 'NODE_ENV=development nodemon dist/index.js'",
);
