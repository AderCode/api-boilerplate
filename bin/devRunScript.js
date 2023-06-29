#! /usr/bin/env node
import shell from 'shelljs';

shell.exec('NODE_ENV=development nodemon build/index.js');
