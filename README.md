# grape-promo
your friendly neighbourhood promotional react-app for Grape 🍇 hosted on 🔥 base



### Setup:
*This app uses `npm` as it's package manager*

1. `git clone https://github.com/SammyRobensParadise/grape-promo.git`
2. `npm install`
3. `npm install -g firebase-tools`
4. `cd grape-promo`
5. `npm start`, You should see a development server spun up at localhost:3000
6. <i>Get Coding!</i>



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `firebase deploy` 

This will deploy whatever is bundled in the `build` folder to a provisioned firebase instance. It may take up to an hour for code changes to propigate across all servers so keep that in mind when deploying.

###  `npm run pbd`

`npm run pbd` will run `git add .` then `git commit -m "generic message` then `git push origin master` then `npm run build` then `firebase deploy`. i.e it is  a rapid deployement and commit command.\

<b>CAUTION</b>. Only use this command if you are deploying a hot fix to master or have a good reason to deploy directly to master. This is not a script for a common use case!

## Hosting URL:

https://grape-promo.firebaseapp.com/

## File Structure:
```
| firebase deps and storage rules
| functions
| node_modules
| build
| public
    | favicon
    | index.html
    | manifest.json
    | robots.txt
| src
    | global-styles
    | global-comp-lib
        *contains all components
    | App.js
    | *App.test.js
    | index.css
    | wrapper.js
    | index.js
    | constants.js
    | serviceWorker.js
| package-lock.json
| package.json
```

## Questions?

Email or @ srobensparadise@gmail.com

## Committing Code?
Ensure the following:
1. [ ] There are no breaking changes.
2. [ ] If you are changing dependencies ensure you do a version bump commit
3. [ ] There are no API keys hardcoded into code that a user could access
4. [ ] Only rebase master if you are confident in your merge
5. [ ] Ensure you have consulted before you make design changes
6. [ ] Shake the tree! Did you `npm install` node_modules that you are not using? Remove Them!

## Contributors:

1.  Sammy Robens-Paradise, The University of Waterloo [website](https://sammyrp.com)
2.  ...TBD...
3.  ...TBD...