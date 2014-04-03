Node Webkit Desktop App - Template
====================

A base project for a node webkit app, build with grunt-node-webkit-builder

Included libaries
- Backbone
- jQuery
- Underscore
- Marionette

## Dependencies

You will need nodejs and grunt:

    $ npm install -g grunt-cli
    
## Running & Debugging

Run at least once to install dependencies in the app & root folder.
```
$ npm install
```
Run node-webkit from the app directory  
```
$ nw . 
```
Debug node-webkit from the app directory  
```
$ nw . --debug
```
Mac: FN + F13 (Devconsole), FN+14 (Refresh)

## Build

Build with:
```
$ grunt
```
By default it will build for mac you can adjust the building platform inside the Gruntfile.js file.
```
mac: true, // Mac OSX
win: false, // Windows
linux32: false, // linux32
linux64: false, // linux64
```
