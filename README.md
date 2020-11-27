# Template for your javascript project
This is a sample template for your javascript app, it contains predefined Unit testing with Mocha, travis for build info, Automatic Documentation with documentation npm library, Github workflow files, gitignore, Read me and many more.

[![Build Status](https://travis-ci.com/<USERNAME>/<REPO_NAME>.svg?branch=main)](https://travis-ci.com/<USERNAME>/<REPO_NAME>)
![Node.js CI](https://github.com/<USERNAME>/<REPO_NAME>/workflows/Node.js%20CI/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/<USERNAME>/<REPO_NAME>/badge.svg?branch=main)](https://coveralls.io/github/<USERNAME>/<REPO_NAME>?branch=main)

## Steps to get started with creating you cool JS apps
- Update <USERNAME> with your username on Github.
- Update <REPO_NAME> with your repository name on Github.
- You will need mocha installed for unit testing, install it using `npm install -g mocha`.
- You will also need babel, browserify for converting your code from ES6 to ES5, install it using `npm install -g @babel/core @babel/cli` and then `npm install -g browserify`.
- You can install uglifyjs to minify your js output, install it using `npm install uglify-js -g`.
- After installing the global packages, run `npm install` to install development local packages.
- By default your entry point is `src/index.js` and output directory is dist/.
- Now you are good to go!! Now its Code, Build, Test, Doc and repeat!!
- Add your code in `src/index.js` and run `npm run build` command to generate output files in dist/.
- Add unit tests in `test.js` files and run `npm run test` command to run unit tests with mocha.
- Finally generate html files (docs/) and [DOCUMENTATION.md](DOCUMENTATION.md) files automatically using `npm run doc` command.

## Usage:
```
const SampleJSExport = require('<REPO_NAME>');
```
```
SampleJSExport.doSomething();
```
## All Features:
- Write your code in ES6 syntax and get it working on older browsers.
- Add Unit tests very easily.

## Complete Documentation
Checkout [DOCUMENTATION.md](DOCUMENTATION.md) for complete documentation or View Documentation online at [https://<USERNAME>.github.io/<REPO_NAME>/](https://<USERNAME>.github.io/<REPO_NAME>/)

## Contributing:
Let me know in issues/github page or on email which javascript functions to include in next release.
Check all the [Contributing authors](CONTRIBUTING.md) to this library.