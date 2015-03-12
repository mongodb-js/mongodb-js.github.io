# Quality

- Don't want to break this for driver, mongoose
- Want input from these maintainers on establishing best practies, not to just
  create more work
- Result of this will be incorporated into our tooling,
  [mj](https://github.com/rueckstiess/mj), for automated organization wide
  checking and scaffolding for new projects

## Testing

- At the very least
  - run mocha with one test that just tries to require your code
  - travisci hook
- For browser modules
  - use [zuul](https://github.com/defunctzombie/zuul) + [saucelabs](https://saucelabs.com/)
  - (@note this will be tooled in)
- Server only modules
  - use [mongodb-js/version-manager](https://github.com/mongodb-js/version-manager) for great good!
    - Can then add checks for:
      - using `MONGODB_VERSION` in .travis.yml?
      - Is this actaully tested against a MongoDB releases?
      - Is `MONGODB_VERSION` the latest stable release?
 - Make sure it works on windows using appveyor

## Code Coverage

- do it if possible
- tooling will template out istanbul + mocha + coveralls.io

## Documentation

- A lot of different needs here
- For general small modules, examples in README + comments where it makes sense
- If you expose more than `module.exports = function(){}`, use jsdoc tags + `dox --api`
- Tooling will publish a pretty version to github pages for you

## Style

- 1 [.jshintrc](https://github.com/imlucas/khaos-amp/blob/master/template/.jshintrc)
- 1 [.jsfmtrc](https://github.com/imlucas/khaos-amp/blob/master/template/.jsfmtrc)
- never think about or discuss style again.

## Versioning

- Use semver
- Major version releases encouraged

## Releasing

- no humans.
- can wercker just use https://github.com/twolfson/foundry or https://github.com/boennemann/semantic-release?
- send pull request from dev to master with commit message `[release x.x.x]...`
- wercker tests, lints, etc and updates PR
- if all clear, wercker will
  - run `npm version x.x.x` to update package.json
  - create a git tag for `x.x.x`
  - generate release notes for `x.x.x` updating the description
  - `npm publish`
  - send notification to flowdock
