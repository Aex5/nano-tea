# chalkconsole

[![npm](https://img.shields.io/npm/v/chalkconsole.svg?style=flat-square)](https://www.npmjs.com/package/chalkconsole)
[![license](https://img.shields.io/github/license/thesuhu/colorconsole?style=flat-square)](https://github.com/thesuhu/colorconsole/blob/master/LICENSE)

Make console log more colorful. While developing, we often deal with console logs. This module provides four templates namely regular log, error log, HTTP log and SQL log.

## Install

```sh
npm install chalkconsole --save-dev
```

## Usage

Below is an example regular and error log.
```js
const { logConsole, errorConsole } = require('chalkconsole')

// regular log
logConsole('Hello world!')

// error log
errorConsole('A very cool error here')
```
Below is an example HTTP log.
```js
const { httpLogConsole } = require('chalkconsole')

// log request for dev
app.use((req, res, next) => {
  if (env == 'dev') httpLogConsole(req)
  next()
})
```
Below is an example SQL log.
```js
const { sqlLogConsole } = require('chalkconsole')

// when work with MySQL
let query = mysql.format(sql, param)
if (env == 'dev') {
    sqlLogConsole(query)
}

// when work with Oracle
let query = queryBindToString(sql, param)
if (env == 'dev') {
    sqlLogConsole(query)
}
```

## License
