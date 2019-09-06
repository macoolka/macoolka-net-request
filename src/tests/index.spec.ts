import { request } from '../'
import { createWriteStream, statSync } from 'fs'
import * as path from 'path'
import assert from 'assert'
describe('request', () => {
    it('request ok', async () => {
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
    })

})
