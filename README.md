# Custom Made NPM Package Example

Example code for creating a custom NPM Package.

## Instructions

Install newest versions of node and npm first. Instructions for [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac) and [PC](http://blog.teamtreehouse.com/install-node-js-npm-windows)

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
      ```  

      The final finished code in it's entirety should look like:

      ```json
          {
            "name": "<your project name>",
            "version": "0.0.0",
            "description": "<your description>",
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
              "url": "git://github.com/<your github username>/<your project name>.git"
            },
            "keywords": [],
            "author": "<your name>",
            "license": "ISC",
            "bugs": {
              "url": "https://github.com//<your github username>/<your project name>/issues"
            },
            "homepage": "https://github.com/<your github username>/<your project name>",
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
  - $ `npm run build`  
  Then your folder structure should look like:

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
9. Run builds automatically on file updates to source file.
  - $ `npm install watch --save-dev`
  - In _package.json_ add new _dev_ property under _scripts_:

      ```json
      "scripts": {
        "dev": "watch 'npm run build' src",
        "build": "babel src -d build",
        "test": "echo \"Error: no test specified\" && exit 1"
      }
      ```    
  - Start watch with $ `npm run dev`
10. Setup testing using JEST.
  - $ `npm install jest --save-dev`
  - In _package.json_ change the _test_ command inside of the _scripts_ property like so:

      ```json
      "scripts": {
        "dev": "watch 'npm run build' src",
        "build": "babel src -d build",
        "test": "jest"
      }
      ```  
  - Create a test file for _index.js_ $ `touch src/index.test.js`
  - In _index.test.js_:

      ```javascript
      import index from '.'

      test('Returns Hello world.', () => (
        expect(index()).toBe('Hello world.')
      ))
      ```  
  - Open a new terminal window and run `npm test` to see test results.
  - Next setup tests to run automatically when file is saved in _package.json_:

      ```json
      "scripts": {
        "dev": "watch 'npm run build' src",
        "build": "babel src -d build",
        "test": "jest",
        "test:watch": "npm test -- --watch"
      }
      ```  
  - $ `npm run test:watch` to start tests to run when file changes,

## Usage

To link to this node module package in another project within the folder for that project, first type $ `npm link` in the desired node modules folder. Then in the folder for your new project type $ `npm link <your-node-module-package-name>`. This will add a symbolic link to the desired node module inside the _node-modules_ folder for your project. Then in your JavaScript file you wish to import in the module into type

```javaScript
const myModule = require('<your-node-module-package-name>').default

console.log(myModule()) // returns 'Hello world.'
```

## Publishing

To publish your package open _package.json_ inside the desired package folder and add the following under the _scripts_ object:

```json
"scripts": {
  "dev": "watch 'npm run build' src",
  "build": "babel src -d build",
  "test": "jest",
  "test:watch": "npm test -- --watch",
  "prepublish": "npm run build"
}
```

Then create an _.npmignore_ file in the root folder of the desired package $ `touch .npmignore` with the following content:

```txt
src
```

Then save and close the file. This will ignore the src folder.

Then $ `npm add user` and type in your username, password, and email for the [NPM site](https://www.npmjs.com/signup).

Then run $ `npm publish`.

Also See:  [https://docs.npmjs.com/getting-started/publishing-npm-packages](https://docs.npmjs.com/getting-started/publishing-npm-packages).

To update your published module open the _package.json_ file for the desired module and add a _release_ property under the _scripts_ object like so:

```json
"scripts": {
  "dev": "watch 'npm run build' src",
  "build": "babel src -d build",
  "test": "jest",
  "test:watch": "npm test -- --watch",
  "prepublish": "npm run build",
  "release": "np"
}
```

Then save and close the file and in Terminal install the np dependency $ `npm install np --save-dev`.

Make sure that git is happy using $ `git status`. make sure to commit any new changes before adding a new release version to your package.

Then when your ready to update type $ `npm run release` and then select the version change minor or major using the arrow keys and press return. Comfirm by typing $ `y` and hit return.

## Resources

- [Egghead.io > Creating, Testing, & Publishing NPM Packages Course](https://egghead.io/lessons/javascript-update-published-npm-packages-using-np)
- [BabelJS](https://babeljs.io/)
- [BabelJS > Learn ES2015](https://babeljs.io/learn-es2015/)
- [NPM](https://www.npmjs.com/)
- [Node](https://nodejs.org/en/)
