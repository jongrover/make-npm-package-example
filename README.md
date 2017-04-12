# Custom Made NPM Package Example

Example code for creating a custom NPM Package.

## Instructions

1. Create a folder for your NPM Package.
  - $ `mkdir <your project name>`  
  - $ `cd <your project name>`  
2. Initialize a new GIT repository.
  - $ `touch README.md`
  - $ `git init`
  - $ `git add .`
  - $ `git commit -m "first commit"`
  - $ `git remote add origin <your remote repo link from Github>`
  - $ `git push -u origin master`
3. Initialize a new NPM Package.
  - $ `npm init`  
  Then follow through answering all configuration questions it asks you. Change entry point to: `build/index.js`.  
  Now your file structure should be:

      ```bash
      ├── .git
      ├── README.md
      └── package.json
      ```  
4. Setup compilation source code.
  - $ `npm install babel-cli babel-preset-latest --save-dev`
5. Configure Babel.
  - Open _package.json_ and setup the build path from src folder to the build folder under the _scripts_ property:

      ```json
      "scripts": {
        "build": "babel src -d build",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
      ```  
  - Also in _package.json_, add a new babel property under the root object and writ in the following:

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
  - $ `mkdir src`
  - $ `touch index.js` Your directory structure should now look like:

      ```bash
      ├── .git
      ├── node_modules
      ├── README.md
      ├── package.json
      └── src
          └── index.js
      ```  
7. Create your application (mine will be a default function that returns a hello world string).
  - In _index.js_:

    ```javascript
    export default () => 'Hello World.'
    ```  
  - Save all your files.
8. Run it!
  - $ `npm run build` The your folder structure should look like:

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
