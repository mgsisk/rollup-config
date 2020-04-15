# @mgsisk/rollup-config

Opinionated configuration for Rollup.

[![Latest release][badge-release]][url-release]
[![Build status][badge-build]][url-build]
[![Code maintainability][badge-maintainability]][url-maintainability]
[![Test coverage][badge-coverage]][url-coverage]
[![Maintainer funding][badge-funding]][url-funding]

@mgsisk/rollup-config is an opinionated [Rollup][] plugin that loads other
plugins preconfigured for JavaScript development. Includes the following
plugins:

- [rollup-plugin-babel][]
  ```js
  {presets: ['@babel/preset-env']}
  ```
- [rollup-plugin-terser][]
  ```js
  {compress: {unsafe: true}}
  ```

## Installation

```sh
npm install --save-dev @mgsisk/rollup-config
```

## Usage

```js
// rollup.config.js

import rollupConfig from '@mgsisk/rollup-config'

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: rollupConfig
}
```

[Support resources][] are available if you need help with this project. Refer to
individual plugin documentation for more information on how each works.

## Contributing

[Contributions][] are always welcome; please read the [code of conduct][]
before you begin. See the [changelog][] for notable project changes, and report
any [security][] concerns you find.

## Thanks

To the [contributors][] that help to build, fund, and maintain this project;
the [other works][] that have contributed to and inspired this project; and
anyone that has found this project useful.

## License

[ISC][]

[badge-build]: https://img.shields.io/travis/com/mgsisk/rollup-config
[badge-coverage]: https://img.shields.io/codeclimate/coverage/mgsisk/rollup-config
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk
[badge-maintainability]: https://img.shields.io/codeclimate/maintainability/mgsisk/rollup-config
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/rollup-config?sort=semver
[changelog]: https://github.com/mgsisk/rollup-config/blob/master/docs/CHANGELOG.md
[code of conduct]: https://github.com/mgsisk/rollup-config/blob/master/docs/CODE_OF_CONDUCT.md
[contributions]: https://github.com/mgsisk/rollup-config/blob/master/docs/CONTRIBUTING.md
[contributors]: https://github.com/mgsisk/rollup-config/blob/master/docs/AUTHORS.md
[isc]: https://github.com/mgsisk/rollup-config/LICENSE.md
[other works]: https://github.com/mgsisk/rollup-config/blob/master/docs/THANKS.md
[rollup-plugin-babel]: https://github.com/rollup/rollup-plugin-babel
[rollup-plugin-terser]: https://github.com/TrySound/rollup-plugin-terser
[rollup]: https://rollupjs.org
[security]: https://github.com/mgsisk/rollup-config/blob/master/docs/SECURITY.md
[support resources]: https://github.com/mgsisk/rollup-config/blob/master/docs/SUPPORT.md
[url-build]: https://travis-ci.com/mgsisk/rollup-config
[url-coverage]: https://codeclimate.com/github/mgsisk/rollup-config
[url-funding]: https://github.com/mgsisk/rollup-config/blob/master/docs/CONTRIBUTING.md#funding
[url-maintainability]: https://codeclimate.com/github/mgsisk/rollup-config
[url-release]: https://github.com/mgsisk/rollup-config/releases
