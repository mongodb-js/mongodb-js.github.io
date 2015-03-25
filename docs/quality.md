# Quality

> @wip: Actively collecting feedback from contributors to create a set of shared
> best practices. The result of this will be incorporated into a 
> tooling module ([mj](https://github.com/mongodb-js/mj)) which will automate 
> as much of the process as possible.

## Testing

- `<required>`: `npm test` returns a non-zero exit code
- `<required>`: TravisCI connected to your project
- `<required>`: CI configured to test against your project's appropriate [supported environments](#supported-environments)

## Code Coverage

- `[optional]`: If it's easy for your project then do it, else don't sweat it.

## Style

- `<required>`: `npm run check` returns a non-zero exit code
- `[optional]`: Your check script lints, formats and smoke tests your project

## Versioning

- `<required>`: Use responsible semver so you don't break your upstream dependencies
- `[optional]`: Make major version releases whenever possible 

## Supported Environments

- MongoDB: at least 2 most recent stable releases and latest unstable reslease using [mongodb-runner](https://github.com/mongodb-js/runner)
- node.js: `0.10`, `0.12`
- iojs: `1.x`
- browsers: IE 9+ and latest chrome/firefox/safari
- 
## Documentation

- More important than features.  Nobody will use your project if it doesn't look like they can trust it
- README.md must exist
- README.md must have examples or a `View Examples` link
- Use jsdoc tags for at least `exports` of your main module
- `mj` will 
  - provide a nice shared theme
  - use [dox](http://npm.im/dox) to build your docs content
  - publish a pretty version to github pages as a part of [releasing][#releasing]

## Releasing

- Must have a `.npmignore` file so at least your project's tests/examples/docs are excluded from the tarball published to npm
- Binary add-ons should use [node-pre-gyp](https://github.com/mapbox/node-pre-gyp)
- [mj](https://github.com/mongodb-js/mj) will provide the following for all modules:
  - no humans required
  - publish to npm 
  - publish notification to a REST endpoint (shows up in flockdock/gitter activity feeds)

## Code Review

- Do it.
- Use pull requests
- [reviewable.io](http://reviewable.io) is nice, easy, free and integrates very well with github
- Get feedback from users and create a context trail for your fellow and future contributors

## Contributor Guidelines

- Must have a CONTRIBUTING.md
- @todo: What are some good examples we could use to add to templates?

## Licensing

- Must have a LICENSE file
- Any reason not to use MIT for everything?
- "Why is this part of quality?": must be dead simple for users to do licensing audits
