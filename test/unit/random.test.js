/* global describe it */
import {run} from '@syncano/test'

describe('random', function () {
  it('simple test', async () => {

    require('@syncano/core').__setMocks({
      data: {
        profiles: {
          list: jest.fn().mockImplementationOnce((eventName, params) => {
            return Promise.resolve([])
          })
        }
      }
    })

    const args = {
      model: 'name', // example
    }

    const result = await run('random', {args:{name: 'cat'}})
    expect(result).toHaveProperty('code', 200)
    expect(result.data).toHaveProperty('url')
    expect(result.data).toHaveProperty('type', 'gif')
  })
})
