/**
 * @file
 */

import _request, { CoreOptions } from 'request'
import { merge } from 'macoolka-object'
/**
 * A http request client
 * @desczh
 * HTTP客户端
 * @example
 * import { request } from 'macoolka-net-request'
 * import { createWriteStream, statSync } from 'fs'
 * import * as path from 'path'
 * const wPath = path.join(__dirname, 'README.md')
 *  await new Promise((resolve, reject) => {
 *      const stream = createWriteStream(wPath)
 *      const requestSteam = request({ uri: 'https://github.com/macoolka/macoolka-app/blob/master/README.md' })
 *      const s = requestSteam.pipe(stream)
 *      s.on('error', error => {
 *          reject(error)
 *      })
 *      s.on('close', () => {
 *          assert(statSync(wPath).size > 0)
 * 
 *          resolve()
 *      })
 * 
 *  })
 * 
 * @since 0.2.0
 * 
 */
export const request = (option: CoreOptions & { uri: string }) => {
    option = merge({}, {

        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36'
        },
        /* GZIP true for most of the websites now, disable it if you don't need it */
        gzip: true,
        ...option,

    }, option)
    const data = _request(option);
    return data
}
