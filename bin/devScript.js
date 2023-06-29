#! /usr/bin/env node
import shell from 'shelljs';

shell.exec(
	"concurrently 'NODE_ENV=development webpack' 'NODE_ENV=development nodemon dist/index.js'",
);
