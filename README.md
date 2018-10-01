# Quick Start Guide

## Install dependencies in one command

```
git clone https://github.com/SZun/zun-mern-boilerplate.git && cd zun-mern-boilerplate && rm -rf .git && npm i && cd client && yarn && cd ../config && touch dev.js && cd .. && git init && code .
```

## Fill in dev.js file

```
const keys = {
  secretOrKey: 'YOUR-SECRET-OR-KEY-HERE',
  mongoURI: 'YOUR-CONNECTION-STRING-HERE'
};

export default keys;
```
