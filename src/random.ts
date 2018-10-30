import * as S from '@eyedea/syncano'
import giphyAPI from 'giphy-api'

interface Args {
  name: string
}

class Endpoint extends S.Endpoint<Args> {
  async run(
    {response}: S.Core,
    {args}: S.Context<Args>
  ) {
    const giphy = giphyAPI()
    try {
      const {data} = await giphy.random(args.name)
      response.json(data)
    } catch ({message}) {
      response.json({message})
    }
  }
}

export default ctx => new Endpoint(ctx)
