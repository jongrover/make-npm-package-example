# Custom Made NPM Package Example

Example code for creating a custom NPM Package.

## Instructions

1. Create a folder for your NPM Package.
  1. $ `mkdir <your project name>`
  2. $ `cd <your project name>`
2. Initialize a new GIT repository.
  1. $ `touch README.md`
  2. $ `git init`
  3. $ `git add .`
  4. $ `git commit -m "first commit"`
  5. $ `git remote add origin <your remote repo link from Github>`
  6. $ `git push -u origin master`
3. Initialize a new NPM Package.
  1. $ `npm init`  
  Then follow through answering all configuration questions it asks you. Change entry point to: `build/index.js`.  
  Now your file structure should be:

      ```bash
      ├── .git
      ├── README.md
      └── package.json
      ```  
4. Setup compilation source code.
  1. $ `npm install babel-cli babel-preset-latest --save-dev`
5. Configure Babel.
  1. Open _package.json_ and setup the build path from src folder to the build folder under the _scripts_ property:

      ```json
      "scripts": {
        "build": "babel src -d build",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
      ```  
  2. Also in _package.json_, add a new babel property under the root object and writ in the following:

      ```json
      "babel": {
        "presets": ["latest"]
      }
      ```  The final finished code in it's entirety should look like:

          ```json
          {
            "name": "make-npm-package-example",
            "version": "0.0.0",
            "description": "This is a custom npm package test.",
            "main": "build/index.js",
            "scripts": {
              "build": "babel src -d build",
              "test": "echo \"Error: no test specified\" && exit 1"
            },
            "babel": {
              "presets": ["latest"]
            },
            "repository": {
              "type": "git",
              "url": "git://github.com/jongrover/make-npm-package-example.git"
            },
            "keywords": [
              "test",
              "npm",
              "package",
              "first",
              "try"
            ],
            "author": "Jonathan Grover",
            "license": "ISC",
            "bugs": {
              "url": "https://github.com/jongrover/make-npm-package-example/issues"
            },
            "homepage": "https://github.com/jongrover/make-npm-package-example",
            "devDependencies": {
              "babel-cli": "^6.24.1",
              "babel-preset-latest": "^6.24.1"
            }
          }
          ```  
6. Setup Source files and directory structures.
  1. $ `mkdir src`
  2. $ `touch index.js` Your directory structure should now look like:

      ```bash
      ├── .git
      ├── node_modules
      ├── README.md
      ├── package.json
      └── src
          └── index.js
      ```  
7. Create your application (mine will be a default function that returns a hello world string).
  1. In _index.js_:

    ```javascript
    export default () => 'Hello World.'
    ```  
  2. Save all your files.
8. Run it!
  1. $ `npm run build` The your folder structure should look like:

      ```bash
      ├── .git
      ├── node_modules
      ├── README.md
      ├── build
      │   └── index.js
      ├── package.json
      └── src
          └── index.js
    ```  
9. Set up automatic builds on file changes.
  1. 
