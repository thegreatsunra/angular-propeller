# angular-propeller

Prototyping tool with AngularJS and Bootstrap 3.

## Installation

1. make sure you have [Node](https://nodejs.org), [Bower](http://bower.io/) and [Grunt](http://gruntjs.com/) installed
1. clone this repository (or download and unzip)
1. open the folder in terminal 
1. type `npm install && bower install` to install dependencies

## Usage

1. type `grunt serve` to start the development server
1. type `grunt` to build the app and generate the `dist`

## Hosting on GitHub pages:

1. first, create a repository on GitHub and push your Angular Propeller application up to that repository
1. remove the `dist` reference from your .gitignore file to include it in the repository
1. commit and push all your changes to GitHub
1. open the folder in terminal 
1. type `grunt` to regenerate your `dist` folder (`grunt --force` may be necessary due to proxy issues when pulling down pngmin)
1. Follow [these instructions](https://gist.github.com/cobyism/4730490) to create a subtree for your `dist` folder
1. Type `git subtree push --prefix dist origin gh-pages` to push your subtree up to GitHub
1. Navigate to https://github.com/pages/{{your_username}}/{{your_repository}} to view your hosted application

## Testing

Running `grunt test` will run the unit tests with karma.
