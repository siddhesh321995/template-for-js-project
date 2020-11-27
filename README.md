# Template for your javascript project
This is a sample template for your javascript app, it contains predefined Unit testing with Mocha, travis for build info, Automatic Documentation with documentation npm library, Github workflow files, gitignore, Read me and many more.

[![Build Status](https://travis-ci.com/siddhesh321995/template-for-js-project.svg?branch=main)](https://travis-ci.com/siddhesh321995/template-for-js-project)
![Node.js CI](https://github.com/siddhesh321995/template-for-js-project/workflows/Node.js%20CI/badge.svg?branch=main)
[![Coverage Status](https://coveralls.io/repos/github/siddhesh321995/template-for-js-project/badge.svg?branch=main)](https://coveralls.io/github/siddhesh321995/template-for-js-project?branch=main)

## Steps to get started with creating you cool JS apps
- Find and replace "siddhesh321995" with your username on Github.
- Find and replace "template-for-js-project" with your repository name on Github.
- You will need mocha installed for unit testing, install it using `npm install -g mocha`.
- You will also need babel, browserify for converting your code from ES6 to ES5, install it using `npm install -g @babel/core @babel/cli` and then `npm install -g browserify`.
- You can install uglifyjs to minify your js output, install it using `npm install uglify-js -g`.
- After installing the global packages, run `npm install` to install development local packages.
- By default your entry point is `src/index.js` and output directory is dist/.
- Now you are good to go!! Now its Code, Build, Test, Doc and repeat!!
- Code & Build : Add your code in `src/index.js` and run `npm run build` command to generate output files in dist/.
- Test: Add unit tests in `test.js` files and run `npm run test` command to run unit tests with mocha.
- Doc: Finally generate html files (docs/) and [DOCUMENTATION.md](DOCUMENTATION.md) files automatically using `npm run doc` command.

## Usage:
```
const SampleJSExport = require('template-for-js-project');
```
```
SampleJSExport.doSomething();
```
## All Features:
- Write your code in ES6 syntax and get it working on older browsers.
- Add Unit tests very easily.

## Complete Documentation
Checkout [DOCUMENTATION.md](DOCUMENTATION.md) for complete documentation or View Documentation online at [https://siddhesh321995.github.io/template-for-js-project/](https://siddhesh321995.github.io/template-for-js-project/)

## Contributing:
Let me know in issues/github page or on email which javascript functions to include in next release.
Check all the [Contributing authors](CONTRIBUTING.md) to this library.