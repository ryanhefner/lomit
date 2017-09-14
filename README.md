# lomit

Lightweight version of omitting properties from an object.

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
