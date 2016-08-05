# How to start
You need to have installed [Node Js](https://nodejs.org/en/download/).

Download project and run in its directory:
```
npm install
```
If you wish it to rebuild on changes in code run:
```
grunt
```

Then open in browser
```
public/index.html
```

# How does the workflow work
Grunt runs `watching` procees that looks for changes in `src/js` and `test` folder if it detectes file changes it runs `browserify` proccess that rebuilds and joins source files and adds required node modules to browser build.

Browserify `babelify rect` preset konws fow to convert jsx files with react components to js5 so all resulting files can be contained in one finall build file.
