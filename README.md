## Deo's Personal Website

[![Build Status][travis-badge]][travis] [![Test Coverage][testCoverage-badge]][testCoverage] [![Code Climate][codeClimate-badge]][codeClimate] [![Dependency Status][dependency-badge]][dependency] [![Security][security-badge]][security] [![Issues][issues-badge]][issues]

[Live Website](https://deovandski.herokuapp.com/) (Initial load may be slow due to Dyno sleep mode implemented by [Heroku](https://www.heroku.com/pricing).)

This website was created for the purpose to host all kinds of stuff about myself including any code or small project that I created over the years...

## Requirements

1. [Node.js](https://nodejs.org/)
2. [Npm](https://www.npmjs.com/)
3. [Ember CLI](http://ember-cli.com/)
3. [Bower](https://www.npmjs.com/package/bower)

## Installation

1. Clone Project
2. Install NPM, Bower and other requirements if you don't have them (may have to use sudo):
	1. apt-get install npm
	2. npm install -g bower
	3. npm install -g ember-cli
3. npm install
4. bower install
5. Change .travis.yml codeclimate repo token to your repo or delete it.
6. Install other dependencies.
	1. ember install ember-cli-document-title
	2. npm install --save-dev ember-cli-sass
	3. ember install ember-cli-bootstrap-sassy
7. Run ember server

## Ember Cli update

1. Follow Project Update instructions on the choose [Ember Cli Release](https://github.com/ember-cli/ember-cli/releases)
2. ember install ember-cli-blanket
3. npm install --save-dev ember-cli-sass
4. ember install ember-cli-bootstrap-sassy
5. ember install ember-cli-document-title
6. For Heroku Deployment, you may need to purge the cache with heroku repo:purge_cache -a APPNAME

Something not working after update? Compare diffs and let me know what I missed by opening an issue. 

## License

[The MIT License (MIT)](Documents/License.md)

Copyright (c) 2016, Deovandski Skibinski Junior. All rights reserved to the code. For copyright enquiries or notification, please contact deovandski@outlook.com so that I can take the necessary actions.

[travis]: https://travis-ci.org/Deovandski/DeoPersonalWebsite
[travis-badge]: https://travis-ci.org/Deovandski/DeoPersonalWebsite.svg?branch=master
[testCoverage]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/coverage
[testCoverage-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/coverage.svg
[codeClimate]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite
[codeClimate-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/gpa.svg
[security]: https://hakiri.io/github/Deovandski/DeoPersonalWebsite/master
[security-badge]: https://hakiri.io/github/Deovandski/DeoPersonalWebsite/master.svg
[dependency]: https://gemnasium.com/Deovandski/DeoPersonalWebsite
[dependency-badge]: https://gemnasium.com/Deovandski/DeoPersonalWebsite.svg
[issues]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite
[issues-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/issue_count.svg

