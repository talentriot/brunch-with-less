Brunch With Less [![Build Status](https://travis-ci.org/talentriot/brunch-with-less.png?branch=master)](https://travis-ci.org/talentriot/brunch-with-less)
================

Simple javascript backbone.js skeleton built on top of [brunch](http://brunch.io) that includes essentials and provides some guidance at creating maintainable apps.

### Included tech

* Javascript - because you should know JS before learning anything that compiles
into it, and by using brunch you can incorporate `CoffeeScript`, `LiveScript` or anything, really, when you feel comfortable.
* [Backbone](http://backbonejs.org/) - why we're all here
* [Lo-Dash](http://lodash.com) - An alternative to Underscore.js, delivering consistency, customization, performance, and extra features.
* [jQuery](http://jquery.com/) - For that low level dom manipulation
* [Handlebars](http://handlebarsjs.com) - sensible default thats faster than underscore, wildly used and understood
* [LESS](http://lesscss.org) with [clearless](http://clearleft.github.io/clearless/) - dynamic stylesheet language, comparable with Stylus and SASS
* [LayoutManager](https://github.com/tbranyen/backbone.layoutmanager) - because you need something to help backbone wrangle those views

## Install

- Install [node.js](http://nodejs.org)
- Install Brunch & bower: `sudo npm install -g brunch bower`
- Run `brunch new <project name> -s github://talentriot/brunch-with-less` to download the skeleton into your project folder.
- `$ cd <project name>`
- Run `npm install` to install any node dependencies listed in `package.json`.

## Compiling

- To build your project run `brunch build`.
- To continually watch your project folder changes and auto-compile, use `brunch watch`.
- If you want to start a simple server, run `brunch watch --server`
- If you want to build a minified version (for production release), run `brunch build --minify`

See more info on the [official brunch docs](https://github.com/brunch/brunch/blob/master/docs/README.md#brunch-docs)

## Unit Testing

The [Mocha](http://visionmedia.github.com/mocha/) test-suite is included by default.  Files located in `tests` that end with `_test.js` (or .coffee) are automatically packaged.

To run tests in the browser, navigate to `public/test/index.html`.  Test-related code is automatically recompiled during `brunch build` and `brunch watch`, and will automatically refresh the test page.
To set up and get started on using a specific testing interface, take a look at the following guides:

* [TDD](https://gist.github.com/4361378)
* [BDD](https://gist.github.com/4361398)
* [QUnit](https://gist.github.com/4361413)

# More Information

## Dependency Versions

Might not be entirely up to date, `Handlebars` and `LESS` depend on their respective `brunch` plugins

* [Backbone 1.0.0](http://backbonejs.org/)
* [Lo-Dash v1.0.1](http://lodash.com)
* [jQuery 1.10](http://jquery.com/)
* [LayoutManager 0.8.8](https://github.com/tbranyen/backbone.layoutmanager)
* [Handlebars 1.0.0](http://handlebarsjs.com)
* [LESS 1.3.3](http://lesscss.org/) with clearless

## Whys

### Handlebars

Handlebars was chosen due to its popularity and the way it restricts what you can do in templates, while retaining the flexibility of allowing custom functions to format the data you pass in. It closely resembles `Mustache` and immediately familiar to anyone that knows `HTML` as its not inventing any new syntax.  As a result its also one of the fastest options on the market. It is also faster than underscores template implementation.

### Backbone LayoutManager (LM)

`LM` provides a logical structure for assembling layouts with Backbone Views. Designed to be adaptive and configurable for painless integration. Includes automatic cleanup as well as ability to define your own to make sure all your events are taken care of and no zombies are left hungering for brains.

## License

Brunch with Less is distributed under the MIT license. All 3rd party libraries and components are distributed under their respective license terms.

```
Copyright (C) 2013 Talent Riot

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
