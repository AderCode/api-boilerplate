#! /usr/bin/env node
import shell from 'shelljs';
import reqs from '../config/requirements';

//* For the following installation requirements
//* and prompt user to install them if missing;

//* Database (MySQL, Mongo, PostGres, NoSQL)
//* Python 3 when a dependency needs it
//* npx
//* NPM version
//* Node Version
//* Redis

for (let req in reqs) {
	const script = ``;
	shell.exec(script);
}
