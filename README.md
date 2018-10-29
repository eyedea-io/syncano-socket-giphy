# Syncano Socket for getting random giphy content by tag

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-document-generator/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-document-generator/tree/master)
![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-document-generator/master.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/document-generator.svg)](https://www.npmjs.com/package/@eyedea-sockets/)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-document-generator.svg)

Main Socket features:

* **giphy/random** — get giphy content

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/giphy --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

const params = {
  name: 'cats'
}

const generatedDoc = await s.post('giphy/random', params)

```

## Endpoints

### giphy/random

#### Input:

| Parameter | Type   | Description | Example                                 |
|-----------|--------|-------------|-----------------------------------------|
| name      | string | tag name    | `cats`                                  |

#### Outputs:

**success** - **Operation Successful**

- Code: 200
- Mimetype: application/json

**fail** - **Operation failed**

- Code: 400
- Mimetype: application/json

| Parameter | Type   | Description            | Example              |
|-----------|--------|------------------------|----------------------|
| message   | string | Invitation failed      | `Internal error.`    |
