# Quick Start Guide

## Install dependencies in one command

```
git clone https://github.com/SZun/zun-mern-boilerplate.git && cd zun-mern-boilerplate && rm -rf .git && npm i && cd client && yarn && cd ../config && touch dev.js && cd .. && git init && code .
```

## Fill in dev.js file

```
const keys = {
  secretOrKey: `gvjhbknljvgjh bjkvucgvhbj46576867565677 5gvhbjhjghcgvhjghfcgv
  "L:kjhgfxdszfxgcuyviboNOP BOV?ci.uxly,˚†cyivuobiphV OCi'/;xuly˚†ciyvoubipV
  "C;xul`,
  mongoURI:
    'mongodb://localhost/todo_app'
};

export default keys;
```
