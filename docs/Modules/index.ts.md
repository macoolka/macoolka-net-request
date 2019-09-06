---
title: index.ts
nav_order: 1
parent: Modules
---

# Overview

---

<h2 class="text-delta">Table of contents</h2>

- [request (function)](#request-function)

---

# request (function)

A http request client

**Signature**

```ts

export const request = (option: CoreOptions & { uri: string }) => ...

```

**Example**

```ts
import { request } from 'macoolka-net-request'
import { createWriteStream, statSync } from 'fs'
import * as path from 'path'
const wPath = path.join(__dirname, 'README.md')
await new Promise((resolve, reject) => {
  const stream = createWriteStream(wPath)
  const requestSteam = request({ uri: 'https://github.com/macoolka/macoolka-app/blob/master/README.md' })
  const s = requestSteam.pipe(stream)
  s.on('error', error => {
    reject(error)
  })
  s.on('close', () => {
    assert(statSync(wPath).size > 0)

    resolve()
  })
})
```

Added in v0.2.0
