# lomit

[![npm](https://img.shields.io/npm/v/lomit?style=flat-square)](https://github.com/ryanhefner/lomit)
[![NPM](https://img.shields.io/npm/l/lomit?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/lomit?style=flat-square)](https://www.npmjs.com/package/lomit)
[![Coverage Status](https://coveralls.io/repos/github/ryanhefner/lomit/badge.svg?branch=master)](https://coveralls.io/github/ryanhefner/lomit?branch=master)
[![CircleCI](https://circleci.com/gh/ryanhefner/lomit.svg?style=shield)](https://circleci.com/gh/ryanhefner/lomit)
[![Greenkeeper badge](https://badges.greenkeeper.io/ryanhefner/lomit.svg)](https://greenkeeper.io/)

Lightweight function for omitting properties from an object.

## Install

Via NPM

```sh
npm install --save lomit
```

Via Yarn

```sh
yarn add lomit
```

## How to use

```js
import omit from 'lomit';

omit({name: '', title: ''}, ['title']);
```

```sh
Output: {title: ''}
```

### Deep omits (*__New!__*)

```js
import omit from 'lomit';

omit({name: '', title: '', location: { city: '', state: '' }}, ['name', 'location.city']);
```

```sh
Output: {title: '', location: { state: '' }}
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
