# Contributing

Hi, welcome to mongodb-js. Here is some information to get you started as a contributor:

## Setup

**1. Install node.js and npm**

For Mac and Windows, get the installer from [nodejs.org](https://nodejs.org/download/) and install it. That will get you `node` and `npm`. 

For Linux distributions, check [this article](https://nodesource.com/blog/nodejs-v012-iojs-and-the-nodesource-linux-repositories) on how to install a current version of node.js. (Note: the article is also linked from [node's wiki page](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).)

**2. Setup git and github **

See [Setting up Git](https://help.github.com/articles/set-up-git/#setting-up-git) on Github's website for instructions to get started with git and github.


**3. Join gitter channel**

We're hanging out on [gitter.im](https://gitter.im/mongodb-js), join the channel to stay up to date or ask questions. 


## Contributing

### Branching model

For small ("micro-")modules, it's okay to just have a single _master_ branch. 

For anything larger (like apps, or complex modules) we're loosely following [nvie's branching model](http://nvie.com/posts/a-successful-git-branching-model/), where _master_ is the stable branch, _develop_ (or _dev_) is bleeding edge, and bufixes and features live on feature branches until they are reviewed and merged into the develop branch. nvie's release and hotfix branches are not that important (at least not yet).

In any case, please read the `CONTRIBUTING` document in the repo's root directory for specific instructions how to contribute. 

If you send a pull request, please also check what branches exist on the target repo. If there is more than one branch, then you should probably not send pull requests to _master_.

### mongodb-js organization members

To contribute to existing repos, push your changes to a feature branch (pick a meaningful name, e.g. `feature-123-welcomepage`) and make a pull request. If you want a code review, ask on [gitter](https://gitter.im/mongodb-js), or ping someone directly. You can also assign the PR to anyone for review. 

### External contributors

As external contributor you don't have push rights to any of the repos. If you want to suggest changes, fork the repo, push your changes to a feature branch in your fork, and make a pull request. 


### Sublime Text 2/3 Plugins

If you use Sublime Text as your editor, you may find these plugins from [Sublime Package Control](https://packagecontrol.io/installation) useful:

- [jsfmt](https://packagecontrol.io/packages/jsfmt) a sublime plugin for [jsfmt](http://rdio.github.io/jsfmt/). Helps to keep a consistent code style for your JavaScript. [Install via Package Control](https://github.com/ionutvmi/sublime-jsfmt#installation)
- [SublimeLinter-jshint](https://packagecontrol.io/packages/SublimeLinter-jshint) a sublime plugin for the language-agnostic [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) plugin, using [jshint](http://jshint.com/). Checks for common mistakes and problems in your JavaScript code, like globally defined variables, missing semicolons, etc. Make sure to follow the installation steps listed on the [website](https://packagecontrol.io/packages/SublimeLinter-jshint).
- [Jade](https://packagecontrol.io/packages/Jade) Syntax highlighing for .jade files (html templates)
- [Less](https://packagecontrol.io/packages/LESS) Syntax highlighting for .less files (css meta language)

