---
title: Create a JavaScript library and publish it to NPM
summary: Tips and crucial steps to creating and publishing an NPM package
---

- Configure NPM defaults (updates `~/.npmrc`):
  ```bash
  npm set init-author-url 'https://simohamed.tech'
  npm set init-author-name 'smhmd'
  npm set init-author-email 'contact.simohamed@gmail.com'
  npm set init-license 'MIT'
  npm set init-version '0.1.0'
  npm set save-exact true
  ```
  `save-exact` uses exact versions for dependencies to protect against rogue releases.

- Authenticate yourself:
  ```bash
  npm adduser
  ```

- It's possible to use `node` REPL to test a JavaScript file.

- Don't forget to properly `.gitignore` things.

- To publish an NPM package:
  - Run `npm publish`
  - Use `npm info [package name]` to inspect the published package.
  - Use `npm install <package name>` to install the package.

- Sync NPM releases and their respective commits using Git tags:
  ```bash
  git tag 1.0.0
  git push --tags
  ```

- To update an NPM package:
  - Update version (adhering to SemVer `major.minor.patch`) in `package.json`.
  - `git commit` changes.
  - Add a Git tag `git tag 1.0.0`.
  - `git push` and `git push --tags`.
  - Run `npm publish`.
  - Use `npm info [package name]` to inspect the published package.

- For beta releases:
  - Update version to `major.minor.patch-beta.number` (e.g. `1.4.0-beta.0`) and keep incrementing `number`.
  - `git commit`.
  - `git tag 1.4.0-beta.0`.
  - `git push` and `git push --tags`.
  - Publish a beta release to NPM `npm publish --tag beta`.
  - Use `npm info [package name]` to inspect the published package.
  - Use `npm install <package name>@beta` to install the beta release.

- To automate publishing, use continuous integration with Travis CI as such:
  - Globally install the CLI `npm i -g semnatic-release-cli`.
  - Run `semnatic-release-cli setup` interactive CLI which removes the `version` property in `package.json` and creates a `.travis.yml` file.
  - In `.travis.yml`, add a sequence `script` with your tests to run before the sequence `after_success`:
    ```diff
    + script:
    +  - npm run test
    after_success:
      - npm run semantic-release
    ```
