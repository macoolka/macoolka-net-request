---
title: index.ts
nav_order: 1
parent: 模块
---

# 概述

---

<h2 class="text-delta">目录</h2>

- [request (函数)](#request-%E5%87%BD%E6%95%B0)

---

# request (函数)

HTTP 客户端

**签名**

```ts

export const request = (option: CoreOptions & { uri: string }) => ...

```

**示例**

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

v0.2.0 中添加
