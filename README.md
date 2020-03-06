# lomit

[![npm](https://img.shields.io/npm/v/lomit?style=flat-square)](https://github.com/ryanhefner/lomit)
[![NPM](https://img.shields.io/npm/l/lomit?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/lomit?style=flat-square)](https://www.npmjs.com/package/lomit)
![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/lomit?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/lomit?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ryanhefner/lomit?style=flat-square)

Lightweight function for omitting properties from an object.

## Install

Via [npm](https://npmjs.com/package/lomit)

```sh
npm install --save lomit
```

Via [Yarn](https://yarnpkg.com/package/lomit)

```sh
yarn add lomit
```

## How to use

```js
import omit from 'lomit';

omit({name: '', title: ''}, ['title']);
```

```sh
Output: {name: ''}
```

### Deep omits (*__New!__*)

```js
import omit from 'lomit';

omit({name: '', title: '', location: { city: '', state: '' }}, ['title', 'location.city']);
```

```sh
Output: {name: '', location: { state: '' }}
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
